// @flow
import React from 'react';
import TabBar from '../../core-ui/TabBar';
import {Icon} from 'react-native-elements';
import {TabNavigator} from 'react-navigation';

import ChallengePage from '../../pages/navbar/ChallengePage';
import ChatPage from '../../pages/navbar/ChatPage';
import CommunityPostPage from '../../pages/navbar/CommunityPostPage';
import NotificationPage from '../../pages/navbar/NotificationPage';
import ProfilePage from '../../pages/navbar/ProfilePage';


const TabPageNavigator = TabNavigator(
  {
    NotificationPage: {
      screen: NotificationPage,
      navigationOptions: {
        // specific one. Depends on the page
        tabBar: {
          icon: () => (
            <Icon name='notifications' color="white" />
          ),
        },
        title: 'Notification',
      },
    },
    ChatPage: {
      screen: ChatPage,
      navigationOptions: {
        tabBar: {
          icon: () => (
            <Icon name='question-answer' color="white" />
          ),
        },
        title: 'Chat',
      },
    },
    ChallengePage: {
      screen: ChallengePage,
      navigationOptions: {
        tabBar: ({state}) => ({
          icon: () => (
            <Icon name="storage" color="white" />
          ),
        }),
        title: 'Challenge',
      },
    },
    CommunityPostPage: {
      screen: CommunityPostPage,
      navigationOptions: {
        tabBar: {
          icon: () => (
            <Icon name='supervisor-account' color="white" />
          ),
        },
        title: 'Community',
      },
    },
    ProfilePage: {
      screen: ProfilePage,
      navigationOptions: {
        tabBar: {
          icon: () => (
            <Icon name='account-circle' color="white" />
          ),
        },
        title: 'Profile',
      },
    },
  },
  {
    tabBarComponent: (args) => {
      console.log('>>>', args);
      return (<TabBar {...args} />);
    },
    tabBarOptions: {
      // iOS
      activeTintColor: '#FFF',
      activeBackgroundColor: '#5A073C',
      inactiveBackgroundColor: '#800053',
      inactiveTintColor: '#FFF',
      showLabel: false,
      // Android
      scrollEnabled: false,
      showIcon: true,
      indicatorStyle: {
        backgroundColor: '#FFF',
      },
      style: {
        backgroundColor: '#800053',
      },
    },
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    initialRouteName: 'ChallengePage',
    headerMode: 'none',
    animationEnabled: false,
  },
);

export default TabPageNavigator;
