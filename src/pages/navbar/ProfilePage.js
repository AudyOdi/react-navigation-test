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

function ProfilePage(props: Object) {
  // let {navigation} = props;
  // console.log(navigation);
  return (
    <View style={{flex: 1, backgroundColor: 'cyan', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black', marginBottom: 10}}>Profile Page</Text>
    </View>
  );
}

export default ProfilePage;
