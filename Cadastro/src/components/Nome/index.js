import React, {useState} from 'react';
import styled from 'styled-components';

const Nome = styled.TextInput`
  width: 280px;
  height: 45px;
  background-color: transparent;
  padding: 5px;
  font-size: 18px;
  border-bottom-width: 1.5px;
  border-bottom-color: #555555;
`;
const Container = styled.View`
  padding: 5px;
  margin-top: 30px;
`;

export default () => {
  return (
    <Container>
      <Nome placeholder="Nome Completo"></Nome>
    </Container>
  );
};
