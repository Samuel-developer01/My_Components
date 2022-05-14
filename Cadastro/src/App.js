import React from 'react';
import {ImageBackground, TextInput, StyleSheet, SafeAreaView,View,StatusBar, Text} from 'react-native';
import Login from './components/Login';
import Nome from './components/Nome';
import Nav from './components/Nav';
import Senha from './components/Senha';
import Senha2 from './components/Senha2';
import Cpf from './components/Cpf';
import Button from './components/Button';

const 

export default () => {
    return(
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor="#00C5B5" barStyle="light-content" />
                <View style={style.nav}>
                    <Nav />
                </View> 
            <ImageBackground source={require('./assets/img/gradient-g8d01e1f53_1920.jpg')} style={style.imageBackground}>
                <View style={style.form}>
                    <Nome/>
                    <Cpf/>
                    <Login/>
                    <Senha></Senha>
                    <Senha2></Senha2>
                    <Button/>
                    </View>
            </ImageBackground>
        </SafeAreaView>
    );
}


const style = StyleSheet.create({
    container:{
        flex: 1,
    },
    nav:{
        flexDirection:'row',
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        alignItems:'center',
      },
      form:{
          marginTop: 27
      }
});