import { Form } from '@unform/web';
import React from 'react';
import {
  FiArrowLeft as IconArrowLeft,
  FiLock as IconLock,
  FiMail as IconMail,
  FiUser as IconUser,
} from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import * as S from './styled';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log('data: ', data);
  }

  return (
    <S.Container>
      <S.Background />

      <S.Content>
        <img src={Logo} alt="Logo GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={IconUser} placeholder="Nome" type="text" />
          <Input
            name="email"
            icon={IconMail}
            placeholder="E-mail"
            type="email"
          />
          <Input
            name="password"
            icon={IconLock}
            placeholder="Senha"
            type="password"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="login">
          <IconArrowLeft />
          Voltar para logon
        </a>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
