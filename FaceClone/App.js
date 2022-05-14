import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
  onChangeText,
  Animated,
} from 'react-native';
import Buttom from './src/components/Button';
import LinearGradient from 'react-native-linear-gradient';
import Input from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAnimado: new Animated.Value(0),
      alt: new Animated.Value(0),
    };

    Animated.sequence([
      Animated.timing(this.state.inputAnimado, {
        toValue: 1,
        duration: 4000,
      }),
    ]).start();
  }

  render() {
    return (
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#012b6d']}
        style={styles.linearGradient}>
        <SafeAreaView style={styles.sectionContainer}>
          <Animated.View
            style={{
              opacity: this.state.inputAnimado,
            }}>
            <Image
              style={{
                width: 100,
                height: 100,
                marginTop: 50,
                marginLeft: 102,
                resizeMode: 'contain'
              }}
              source={require('./assets/Icone-Facebook.png')}
            />

            <TextInput style={styles.input1} placeholder="E-mail" />
            <TextInput style={styles.input2} placeholder="Senha" />

            <View style={styles.estruturaButton}>
              <Buttom />
            </View>
          </Animated.View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
  },

  estruturaButton: {
    marginTop: 30,
    marginLeft: 17
  },
  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 280,
    marginTop: 105,
    borderRadius: 7,
    backgroundColor: 'white',
    borderColor: '#a65c10',
    borderWidth: 1,
  },
  input2: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 280,
    marginTop: 35,
    borderRadius: 7,
    backgroundColor: 'white',
    borderColor: '#a65c10',
    borderWidth: 1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default App;
