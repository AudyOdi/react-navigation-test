// @flow

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
  Button,
  Icon,
} from 'react-native-elements';

function ProgramDetailPage(props: Object) {
  let {navigation} = props;
  // console.log(navigation);
  return (
    <View style={{flex: 1, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'white', marginBottom: 10}}>Program detail Page</Text>
    </View>
  );
}

// ChallengePage.navigationOptions = {
//   tabBar: {
//     icon: () => (
//       <Icon name='storage' color="white" />
//     ),
//   },
// };


export default ProgramDetailPage;
