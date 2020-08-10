import styled from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/background.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;
  max-width: 700px;
  align-items: center;

  img {
    width: 400px;
  }

  form {
    margin: 32px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #eee;
      border-radius: 10px;
      border: 2px solid #eee;
      padding: 12px;
      width: 100%;
      color: #777;

      &::placeholder {
        color: #777;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #ed6707;
      border-radius: 10px;
      color: #fff;
      border: 0;
      padding: 0 16px;
      height: 50px;
      width: 100%;
      margin-top: 16px;
      transition: background-color 0.3s;

      &:hover {
        background: #e04113;
      }
    }

    a {
      color: #888;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, '#999')};
      }
    }
  }
  > a {
    color: #ed6707;
    display: block;
    margin-top: 16px;
    text-decoration: none;
    transition: color 0.3s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: #e04113;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
