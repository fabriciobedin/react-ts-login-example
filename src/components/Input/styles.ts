import styled from 'styled-components';

export const Container = styled.div`
  background: #eee;
  border-radius: 10px;
  border: 2px solid #eee;
  padding: 12px;
  width: 100%;
  color: #777;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

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
