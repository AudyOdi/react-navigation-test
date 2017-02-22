// @flow

import TabNavigatorComponent from '../routes/routeComponents/TabNavigatorComponent';

export default function tabNavigationReducer(navigationState: Object, action: Object) {
  return TabNavigatorComponent.router.getStateForAction(action, navigationState);
}
