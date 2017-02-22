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

function CommunityPage(props: Object) {
  // let {navigation} = props;
  // console.log(navigation);
  return (
    <View style={{flex: 1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'white', marginBottom: 10}}>Community Page</Text>
    </View>
  );
}

export default CommunityPage;
