import React, {Component} from 'react';
import {SafeAreaView, View, TextInput, StyleSheet} from 'react-native';

export class Email extends Component {
  render() {
    return (
      <TextInput
        style={styles.input1}
        // placeholder="E-mail" 
      />
    );
  }
}

export class Senha extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={styles.input2}
          // placeholder="Senha"
          keyboardType="visible-password"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input1: {
    height: 67,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 280,
    // marginTop: 47,
    borderRadius: 30,
    borderColor: '#1E943A',
    borderWidth: 1,
    fontSize: 19,
    backgroundColor: '#333333',
  },
  input2: {
    height: 67,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 280,
    // marginTop: 50,
    borderRadius: 30,
    borderColor: '#1E943A',
    borderWidth: 1,
    fontSize: 19,
    backgroundColor: '#333333',
  },
});
