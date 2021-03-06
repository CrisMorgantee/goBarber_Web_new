import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
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
`;
