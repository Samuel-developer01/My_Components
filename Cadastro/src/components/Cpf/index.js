import React from 'react';
import styled from 'styled-components';

export default () => {
  return (
    <Container>
      <Cpf placeholder="CPF" keyboardType="numeric"></Cpf>
    </Container>
  );
};

const Cpf = styled.TextInput`
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
  margin-top: 12px;
`;
