import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function SignIn() {
  return (
    <View style={style.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={style.containerHeader}>
        <Text style={style.massage}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={style.containerForm}>
        <Text style={style.title}>Email</Text>
        <TextInput placeholder="Digite seu email..." style={style.input} />

        <Text style={style.title}>Senha</Text>
        <TextInput placeholder="Sua Senha" style={style.input} />

        <TouchableOpacity style={style.btn} onPress={() => alert('Seja muito bem-vindo!')}>
          <Text style={style.btnText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnRegister}>
          <Text style={style.registerText}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: '#48A89D'
  },
  containerHeader:{
      marginTop: '14%',
      marginBottom: '8%',
      paddingStart: '5%'
  },
  massage:{
      fontSize: 28,
      fontWeight: 'bold',
      color: '#FFF'
  },
  containerForm:{
      backgroundColor: '#FFF',
      flex: 1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 23,
      paddingStart: '5%',
      paddingEnd: '5%'
  },
  title:{
      fontSize: 20,
      marginTop: 28
  },
  input:{
      borderBottomWidth: 1,
      height: 48,
      marginBottom: 12,
      fontSize: 16
  },
  btn:{
      backgroundColor: '#48A89D',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center'
  },
  btnText:{
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold'
  },
  btnRegister:{
      marginTop: 14,
      alignSelf: 'center'
  },
  registerText:{
      color: '#a1a1a1'
  }
});
