/* @flow */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import autobind from 'class-autobind';
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Badge, Text} from 'native-base';
import TabBarIcon from './TabBarIcon';

type TabScene = {
  route: NavigationRoute;
  focused: boolean;
  index: number;
  tintColor?: string;
};

type DefaultProps = {
  activeTintColor: string;
  activeBackgroundColor: string;
  inactiveTintColor: string;
  inactiveBackgroundColor: string;
  showLabel: boolean;
};

type Props = {
  activeTintColor: string;
  activeBackgroundColor: string;
  inactiveTintColor: string;
  inactiveBackgroundColor: string;
  position: Animated.Value;
  navigationState: NavigationState;
  jumpToIndex: (index: number) => void;
  getLabelText: (scene: TabScene) => string;
  renderIcon: (scene: TabScene) => React.Element<*>;
  showLabel: boolean;
  style: any;
  labelStyle?: any;
  badgeCounter: Object;
};

type State = {
  selectedStyle: {
    left: number;
  };
};

export class TabBar extends Component {

  // See https://developer.apple.com/library/content/documentation/UserExperience/Conceptual/UIKitUICatalog/UITabBar.html
  static defaultProps = {
    activeTintColor: '#3478f6', // Default active tint color in iOS 10
    activeBackgroundColor: 'transparent',
    inactiveTintColor: '#929292', // Default inactive tint color in iOS 10
    inactiveBackgroundColor: 'transparent',
    showLabel: true,
  };

  props: Props;
  state: State;
  springValue: Object;

  constructor() {
    super(...arguments);
    autobind(this);
    let {width} = getScreenSize();
    this.state = {
      selectedStyle: {
        left: (width / this.props.navigationState.routes.length) * this.props.navigationState.index,
      },
    };
    this.springValue = new Animated.Value(this.state.selectedStyle.left);
  }
  componentWillReceiveProps(newProps: Props) {
    let oldProps = this.props;
    if (newProps.navigationState.index !== oldProps.navigationState.index) {
      this.spring(this._calculateLeft(newProps.navigationState.index));
    }
  }

  spring(newLeft: number) {
    let oldLeft = this.state.selectedStyle.left;
    this.setState({selectedStyle: {left: newLeft}});

    this.springValue.setValue(oldLeft);
    console.log('newLeft', newLeft);
    console.log('oldLeft', oldLeft);

    Animated.spring(
      this.springValue,
      {
        toValue: newLeft,
        friction: 5,
        tension: 100,
      },
    ).start();
  }
  render() {
    const {
      position,
      navigationState,
      jumpToIndex,
      activeBackgroundColor,
      inactiveBackgroundColor,
      style,
    } = this.props;
    let {width} = getScreenSize();
    let menuItemWidth = width / navigationState.routes.length;
    let selectedMenuPosition = [
      {width: menuItemWidth, backgroundColor: activeBackgroundColor},
      styles.selection,
    ];
    const { routes } = navigationState;
    // Prepend '-1', so there are always at least 2 items in inputRange
    const inputRange = [-1, ...routes.map((x: *, i: number) => i)];
    return (
      <View style={[styles.tabBar, style]}>
        <Animated.View style={[selectedMenuPosition, {left: this.springValue}]}/>
        {navigationState.routes.map((route: NavigationRoute, index: number) => {
          const focused = index === navigationState.index;
          const scene = { route, index, focused };
          const backgroundColor = inactiveBackgroundColor;
          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => jumpToIndex(index)}
              style={styles.tab}
            >
              {this._renderIcon(scene)}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  _calculateLeft(selectedIndex: number) {
    let {width} = getScreenSize();
    return (width / this.props.navigationState.routes.length) * selectedIndex;
  }
  _renderIcon = (scene: TabScene) => {
    const {
      position,
      navigationState,
      activeTintColor,
      inactiveTintColor,
      renderIcon,
      badgeCounter,
    } = this.props;
    let {route, index, focused} = scene;
    let icon = renderIcon({
      route,
      index,
      focused,
    });
    return (
      <View>
        {icon}
      </View>
    );
  };

}

export function getScreenSize() {
  let {height, width} = Dimensions.get('window');
  return {height, width};
}


const styles = StyleSheet.create({
  tabBar: {
    height: 49, // Default tab bar height in iOS 10
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0, 0, 0, .2)',
    backgroundColor: '#f4f4f4', // Default background color in iOS 10
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000000',
  },
  selection: {
    position: 'absolute',
    height: 49,
    left: 0,
    top: 0,
  },
});


function mapStateToProps(state) {
  return {
    badgeCounter: state.badgeCounter,
  };
}

export default connect(mapStateToProps)(TabBar);
