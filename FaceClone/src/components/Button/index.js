import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function Buttom() {
  return (
    <TouchableOpacity style={styles.button}>
      <Image
        // source={require('./')}
      />
      <Text style={styles.textButton}>Entrar no Facebook</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3d64a4',
    borderRadius: 15,
    height: 70,
    width: 270,
    shadowRadius: 30,
  },
  textButton: {
    color: '#f7f7f7',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
});
