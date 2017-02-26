// @flow

import React, {Component} from 'react';
import {View, Text, StatusBar, Platform} from 'react-native';
import autobind from 'class-autobind';
import Drawer from 'react-native-drawer';
import {Icon, Button} from 'react-native-elements';
import {TabNavigator, addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux';

import StackNavigatorComponent from './routeComponents/StackNavigatorComponent';

type State = {
  isDrawerOpen: boolean;
};

const style = {
  drawer: {backgroundColor: 'white'},
};

class MainRoute extends Component {
  props: Object;
  state: State;
  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      isDrawerOpen: false,
    };
  }
  render() {
    let navigation = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
      index: this.props.nav.index,
      getNavBarState: () => this._getNavBarState(),
      onSideMenuPressed: () => this._onDrawerOpen(),
    });
    let type = (Platform.OS === 'ios') ? 'static' : 'overlay';
    return (
      <Drawer
        open={this.state.isDrawerOpen}
        type={type}
        content={
          <Content navigation={navigation} onClose={this._onDrawerClose}/>
        }
        tapToClose={true}
        tweenEasing="easeOutQuart"
        openDrawerOffset={0.4}
        styles={style}
        tweenDuration={200}
        onCloseStart={this._onDrawerClose}
        tweenHandler={(ratio) => ({
          mainOverlay: {backgroundColor: `rgba(0, 0, 0, ${ratio * 0.5})`},
        })}
      >
        <StatusBar
          backgroundColor="#5A073C"
          barStyle="light-content"
        />

        <StackNavigatorComponent
          navigation={navigation}
        />
      </Drawer>
    );
  }
  _onDrawerClose() {
    this.setState({isDrawerOpen: false});
  }
  _onDrawerOpen() {
    this.setState({isDrawerOpen: true});
  }
  _getNavBarState() {
    return this.props.navBar;
  }
}

function Content(props: Object) {
  let navigateHandler = (nextPage: string) => {
    if (props.navigation && props.navigation.navigate) {
      props.navigation.navigate(nextPage);
      props.onClose();
    }
  };
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text>Drawer</Text>
      <Button
        title="go to Program List"
        onPress={() => navigateHandler('ProgramListPage')}
      />

    </View>
  );
}



function mapStateToProps(state) {
  return {
    nav: state.mainNavigation,
    navBar: state.tabNavigation,
  };
}

export default connect(mapStateToProps, null)(MainRoute);
