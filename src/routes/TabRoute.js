// @flow

import React from 'react';
import {TabNavigator, addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux';

import TabNavigatorComponent from './routeComponents/TabNavigatorComponent';

function TabRoute(props: Object) {
  let navigation = addNavigationHelpers({
    dispatch: props.dispatch,
    state: props.nav,
  });
  return (
    <TabNavigatorComponent
      navigation={navigation}
    />
  );
}

function mapStateToProps(state) {
  return {
    nav: state.tabNavigation,
  };
}

export default connect(mapStateToProps, null)(TabRoute);
