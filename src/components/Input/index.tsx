import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import * as S from './styled';

interface InputsProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputsProps> = ({ icon: Icon, ...rest }) => (
  <S.Container>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </S.Container>
);

export default Input;
