// @flow
import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {StackNavigator} from 'react-navigation';

import TabRoute from '../TabRoute';

import ProgramDetailPage from '../../pages/ProgramDetailPage';
import ProgramListPage from '../../pages/ProgramListPage';

const Navigator = StackNavigator({
  MainView: {screen: TabRoute, navigationOptions: {
    title: (args) => {
      console.log('args', args);
      let navBar = args.getNavBarState();
      let {index: navBarIndex} = navBar;

      let title = navBar.routes[navBarIndex].routeName;

      return title;
    },
  }},
  ProgramListPage: {screen: ProgramListPage, navigationOptions: {title: 'Program List'}},
  ProgramDetailPage: {screen: ProgramDetailPage},
}, {
  mode: 'modal',
  navigationOptions: {
    header: (args) => {
      let {state, goBack, navigate, index, onSideMenuPressed} = args;
      let left = (<Icon name="dehaze" underlayColor="transparent" iconStyle={{marginLeft: 5}} color="white" onPress={() => onSideMenuPressed()}/>);
      if (index != null && state.key !== 'Init') {
        if (Number(index) > 1) {
          left = (<Icon name="arrow-back" color="white" underlayColor="transparent" iconStyle={{marginLeft: 5}} onPress={() => goBack()} />);
        } else {
          left = (<Icon name="close" underlayColor="white" color="white" underlayColor="transparent" iconStyle={{marginLeft: 5}} onPress={() => goBack()} />);
        }
      }
      let right = (<View />);

      return {
        left,
        right,
        style: {backgroundColor: '#800053'},
        titleStyle: {color: 'white', textAlign: 'center'},
      };
    },
  },
});


export default Navigator;
