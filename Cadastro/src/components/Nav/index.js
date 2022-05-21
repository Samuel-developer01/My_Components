import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';

export default () => {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor="#01E2C4" barStyle="light-content" />
      <Text style={style.text}>Cadastro Pessoal</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    height: 50,
    backgroundColor: '#01E2C4',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
