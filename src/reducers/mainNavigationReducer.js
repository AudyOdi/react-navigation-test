// @flow

import StackNavigatorComponent from '../routes/routeComponents/StackNavigatorComponent';

export default function mainNavigationReducer(navigationState: Object, action: Object) {
  return StackNavigatorComponent.router.getStateForAction(action, navigationState);
}
