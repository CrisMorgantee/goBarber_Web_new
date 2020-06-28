import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    color: #312e38;
    background-color: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    scale: 1 0;
    transition: scale 200ms linear;

    /* opacity: 0; */
    /* visibility: hidden; */

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-color: #ff9000 transparent;
      border-style: solid;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
    }
  }

  &:hover span {
    scale: 1 1;

    /* opacity: 1; */
    /* visibility: visible; */
  }
`;
