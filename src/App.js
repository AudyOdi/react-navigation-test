// @flow

import React, {Component} from 'react';
import autobind from 'class-autobind';
import {BackAndroid, AppState, NetInfo, Keyboard} from 'react-native';
import {Provider} from 'react-redux';

import Route from './routes/MainRoute';

import createDatabase from './createDatabase';
import createDataStore from './createDataStore';

const database = createDatabase();

const store = createDataStore();


class App extends Component {
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._onBackButtonPress);
  }
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._onBackButtonPress);
  }
  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
  _onBackButtonPress() {
    let state = store.getState();
    let {mainNavigation, tabNavigation} = state;
    console.log(state);
    if (mainNavigation.index > 0) {
      let lastKey = mainNavigation.routes.slice(-1).pop().key;
      store.dispatch({type: 'Navigation/BACK', key: lastKey});
    } else if (tabNavigation.index !== 2) {
      store.dispatch({type: 'Navigation/BACK', routeName: 'ChallengePage'});
    } else {
      BackAndroid.exitApp(0);
    }

    return true;
  }

}
export default App;
