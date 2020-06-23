import React from 'react';
import {
  FiLock as IconLock,
  FiLogIn as IconLogin,
  FiMail as IconMail,
} from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import * as S from './styled';

const SignIn: React.FC = () => (
  <S.Container>
    <S.Content>
      <img src={Logo} alt="Logo GoBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" icon={IconMail} placeholder="E-mail" type="email" />
        <Input
          name="password"
          icon={IconLock}
          placeholder="Senha"
          type="password"
        />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <IconLogin />
        Criar conta
      </a>
    </S.Content>
    <S.Background />
  </S.Container>
);

export default SignIn;
