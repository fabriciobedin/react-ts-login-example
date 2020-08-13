import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import logo from '../../assets/logo_upf.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório!'),
        email: Yup.string()
          .required('Email obrigatório!')
          .email('Digite um email válido!'),
        password: Yup.string().min(6, 'Mínimo 6 dígitos!')
      });
      await schema.validate(data, {
        abortEarly: false
      });
    } catch (err) {
      formRef.current?.setErrors(getValidationErrors(err));
    }
  }, []);
  return (
    <Container>
      <Content>
        <img src={logo} alt="UPF" />
        <Form ref={formRef} onSubmit={handleSubmit}>
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
