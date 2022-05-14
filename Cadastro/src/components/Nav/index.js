import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default () => {
    return(
        <View style={style.container}>
            <Text style={style.text}>Cadastro Pessoal</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:2,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        width: 400,
        height: 50,
        backgroundColor: '#00C5B5',
        shadowColor: '#000000',
        elevation: 10,
       borderBottomWidth: 0.2,

    },
    text:{
        fontSize: 20,
        fontWeight:'bold',
        color: '#FFFFFF'
    }

});