// @flow

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
  Icon,
} from 'react-native-elements';

function ChatPage(props: Object) {
  return (
    <View style={{flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'white', marginBottom: 10}}>Chat Page</Text>
    </View>
  );
}
export default ChatPage;
