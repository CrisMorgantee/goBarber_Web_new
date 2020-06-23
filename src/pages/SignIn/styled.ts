import { shade } from 'polished';
import styled from 'styled-components';
import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center center;
  place-items: center center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background-color: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #f4ede8;

      & + input {
        margin-top: 8px;
      }

      &::placeholder {
        color: #666360;
        font-weight: 500;
      }
    }

    button {
      background-color: #ff9000;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      height: 56px;
      color: #312e38;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 150ms linear;

      &:hover {
        background-color: ${shade(0.2, '#ff9000')};
      }
    }

    > a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 150ms linear;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    display: flex;
    place-content: center center;
    place-items: center center;
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 150ms linear;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
