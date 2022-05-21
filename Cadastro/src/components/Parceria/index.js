import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components';

const ViewBtn = styled.View`
    padding: 5px; 
    margin-top: 12px;
`;


export default () => {
  function alerta() {
    alert('Conheça nossos serviços!');
  }

  return (
    <ViewBtn style={style.viewBtn}>
      <TouchableOpacity style={style.btn} onPress={alerta}>
        <Text style={style.text}>Conheça nossos serviços</Text>
      </TouchableOpacity>
    </ViewBtn>
  );
};

const style = StyleSheet.create({
  viewBtn: {
    padding: 5,
    marginTop: 12,
    width: 280,
    justifyContent: 'center'
  },
  btn: {
    height: 60,
    backgroundColor: '#00C5B500',
    marginTop: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor:'#01E2C4',
    borderBottomWidth: 3
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
