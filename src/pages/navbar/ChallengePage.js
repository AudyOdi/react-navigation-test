// @flow

import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
  Button,
  Icon,
} from 'react-native-elements';

class ChallengePage extends Component {
  props: Object
  render() {
    let {navigation} = this.props;
    // console.log(navigation);
    return (
      <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white', marginBottom: 10}}>Challenge Page</Text>
        <Button
          onPress={() => {
            navigation.navigate('ProgramListPage');
          }}
          title="go to program list page"
        />
      </View>
    );
  }
}

export default ChallengePage;
