import React from 'react';
import Nav from './components/Nav';
import Form from './components/Form';
import styled from 'styled-components';

const Body = styled.SafeAreaView`
  flex: 1;
`;

export default () => {
  return (
    <Body>
      <Nav />
      <Form />
    </Body>
  );
};


