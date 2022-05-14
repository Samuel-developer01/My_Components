import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

export default () =>{
    return(
        <Container>
            <Senha2 placeholder="Confirmar Senha"></Senha2>
        </Container>
    );
}

const Senha2 = styled.TextInput`
width: 280px;
height: 45px;
background-color: transparent;
padding: 5px;
font-size: 18px;
border-bottom-width: 1.5px;
border-bottom-color: #555555
`;

const Container = styled.View`
  padding: 5px;
  margin-top: 1px  
`;