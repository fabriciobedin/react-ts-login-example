import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import logo from '../../assets/logo_upf.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logo} alt="UPF" />
      <form>
        <h1>Faça seu login</h1>
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha :(</a>
      </form>
      <a href="register">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
  </Container>
);

export default SignIn;
