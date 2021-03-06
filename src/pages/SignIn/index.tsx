import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import {
  FiLock as IconLock,
  FiLogIn as IconLogin,
  FiMail as IconMail,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';
import * as S from './styled';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async ({ email, password }: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Esse não é um email válido')
            .required('Email obrigatório'),
          password: Yup.string().required(
            'A senha é obrigatória, mínimo de 6 dígitos',
          ),
        });

        await schema.validate(
          { email, password },
          {
            abortEarly: false,
          },
        );

        await signIn({
          email,
          password,
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao fazer o login, verifique as credenciais!',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <S.Container>
      <S.Content>
        <S.AnimationContainer>
          <img src={Logo} alt="Logo GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <Input name="email" icon={IconMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={IconLock}
              placeholder="Senha"
              type="password"
            />

            <Button type="submit">Entrar</Button>

            <a href="forgot">Esqueci minha senha</a>
          </Form>

          <Link to="signup">
            <IconLogin />
            Criar conta
          </Link>
        </S.AnimationContainer>
      </S.Content>
      <S.Background />
    </S.Container>
  );
};

export default SignIn;
