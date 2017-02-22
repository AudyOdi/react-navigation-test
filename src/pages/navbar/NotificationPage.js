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

function NotificationPage(props: Object) {
  return (
    <View style={{flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'white', marginBottom: 10}}>Notification Page</Text>
      <Button
        onPress={() => {
          props.navigation.navigate('ProgramListPage');
        }}
        title="go to program list page"
      />
    </View>
  );
}

export default NotificationPage;
