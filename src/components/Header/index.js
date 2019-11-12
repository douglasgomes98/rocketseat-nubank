import React from 'react';
import {Container, Top, Logo, Title} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={require('~/assets/Nubank_Logo.png')} />
        <Title>Douglas Gomes</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
}
