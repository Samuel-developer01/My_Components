import React, {Component} from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default class button extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => {}} style={style.botao}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontFamily: 'gotham-book-italic'
            }}>
            ENTRAR
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  botao: {
    marginTop: 14,
    backgroundColor: '#25943f',
    height: 67,
    width: 280,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});
