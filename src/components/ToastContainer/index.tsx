import React from 'react';
import { useTransition } from 'react-spring';
import { ToastMessage } from '../../hooks/toast';
import * as S from './styled';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransictions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-110%', scale: '1 0' },
      enter: { right: '0', scale: '1 1' },
      leave: { right: '-110%', scale: '1 0' },
    },
  );

  return (
    <S.Container>
      {messagesWithTransictions.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </S.Container>
  );
};

export default ToastContainer;
