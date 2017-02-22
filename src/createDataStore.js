// @flow
import {createStore, combineReducers, applyMiddleware} from 'redux';
import mainNavigation from './reducers/mainNavigationReducer';
import tabNavigationReducer from './reducers/tabNavigationReducer';
import badgeReducer from './reducers/badgeReducer';

let app = combineReducers({
  mainNavigation: mainNavigation,
  tabNavigation: tabNavigationReducer,
  badgeCounter: badgeReducer,
});

let createDataStore = () => {
  let store = createStore(
    app,
  );
  return store;
};

export default createDataStore;
