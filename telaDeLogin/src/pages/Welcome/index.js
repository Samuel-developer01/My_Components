import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={style.contanerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/img/logo.png')}
          style={{width: '100%'}}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={style.containerForm}>
        <Text style={style.title}>
          Monitore, organize seus gastos de qualquer lugar!
        </Text>
        <Text style={style.text}>Faça o login para começar</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={style.btn}>
          <Text style={style.btnText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38A69D',
  },
  contanerLogo: {
    flex: 2,
    backgroundColor: '#38A69D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
    color: '#000000',
  },
  text: {
    color: '#a1a1a1',
  },
  btn: {
    position: 'absolute',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    backgroundColor: '#38A69D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
