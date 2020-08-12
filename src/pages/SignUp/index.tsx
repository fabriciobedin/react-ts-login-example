import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, Content, Background } from './styles';
import logo from '../../assets/logo_upf.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório!'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido!'),
        passwork: Yup.string().min(
          6,
          'A Senha deve conter no mínimo 6 dígitos!'
        )
      });
      await schema.validate(data, {
        abortEarly: false
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <Container>
      <Content>
        <img src={logo} alt="UPF" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome Completo" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="/">
          <FiArrowLeft />
          Voltar para Login
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignUp;
