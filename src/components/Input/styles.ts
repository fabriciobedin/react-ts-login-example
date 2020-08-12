import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #eee;
  border-radius: 10px;
  padding: 12px;
  width: 100%;

  border: 2px solid #eee;
  color: #777;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #ed6707;
      color: #ed6707;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ed6707;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #777;

    &::placeholder {
      color: #777;
    }
  }

  svg {
    margin-right: 12px;
  }
`;
