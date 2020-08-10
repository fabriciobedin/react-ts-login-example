import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import logo from '../../assets/logo_upf.png';

const SignIn: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logo} alt="UPF" />
      <form>
        <h1>Faça seu Logon</h1>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="register">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
  </Container>
);

export default SignIn;
