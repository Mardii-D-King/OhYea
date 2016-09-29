/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class OhYea extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         	OhYea!! 
        </Text>
        <Text style={styles.instructions}>
          SUCCESS!!
        </Text>
        <Text style={styles.instructions}>
          This is the very 1st app framework i tried for myself.{'\n'}
          I feel so great because it actually works.{'\n'} :D
	  I can now stop looking really stressed. XD
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('OhYea', () => OhYea);
