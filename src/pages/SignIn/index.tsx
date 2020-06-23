import React from 'react';
import { FiLogIn as IconLogin } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import * as S from './styled';

const SignIn: React.FC = () => (
  <S.Container>
    <S.Content>
      <img src={Logo} alt="Logo GoBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="E-mail" type="email" />
        <input placeholder="Senha" type="password" />

        <button type="submit">Entrar</button>

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
