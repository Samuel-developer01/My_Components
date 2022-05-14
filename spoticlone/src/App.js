import React, {Component} from 'react';
import {SafeAreaView, TextInput, View, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from './Components/Button';
import {Email, Senha} from './Components/Inputs';

export default class App extends Component {
  render() {
    return (
      <LinearGradient
        colors={[ '#308544', '#397547', '#2a4731']}
        style={style.linearGradient}>
        <SafeAreaView style={style.container}>
          <View
            style={{
              width: 50,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('./assets/img/logo.png')}
              style={style.logo}
            />
          </View>

          <Email />
          <Senha />
          <Button />
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    resizeMode: 'contain',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
