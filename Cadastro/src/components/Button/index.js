import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import styled from 'styled-components';

export default () => {
  function alerta() {
    alert('Parabéns!');
  }

  return (
    <View style={style.viewBtn}>
      <TouchableOpacity style={style.btn} onPress={alerta}>
        <Text style={style.text}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  viewBtn: {
    padding: 5,
  },
  btn: {
    width: 280,
    height: 48,
    backgroundColor: '#00C5B5',
    marginTop: 15,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
