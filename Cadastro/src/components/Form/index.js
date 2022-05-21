import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import Login from '/Projetos/Components/Cadastro/src/components/Login';
import Nome from '/Projetos/Components/Cadastro/src/components/Nome';
import Senha from '/Projetos/Components/Cadastro/src/components/Senha';
import Senha2 from '/Projetos/Components/Cadastro/src/components/Senha2';
import Cpf from '/Projetos/Components/Cadastro/src/components/Cpf';
import Button from '/Projetos/Components/Cadastro/src/components/Button';
import styled from 'styled-components';
import Parceria from '../Parceria';

const Safe = styled.View`
  flex: 1;
`;

export default () => {
  return (
    <Safe>
      <ImageBackground
        source={require('/Projetos/Components/Cadastro/src/assets/img/gradient-g8d01e1f53_1920.jpg')}
        style={style.imageBackground}
        resizeMode="cover">
        <Nome />
        <Cpf />
        <Login />
        <Senha></Senha>
        <Senha2></Senha2>
        <Button />
        <Parceria />
      </ImageBackground>
    </Safe>
  );
};

const style = StyleSheet.create({
  imageBackground: {
    flex: 1,
    alignItems: 'center',
  },
});
