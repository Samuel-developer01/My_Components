import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';



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
    marginTop: 12
  },
  btn: {
    width: 280,
    height: 60,
    backgroundColor: '#01E2C4',
    marginTop: 18,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
