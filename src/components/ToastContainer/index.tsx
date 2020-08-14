import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle size={22} />

        <div>
          <strong>Aconteceu um problema :(</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={16} />
        </button>
      </Toast>

      <Toast type="success" hasDescription={false}>
        <FiAlertCircle size={22} />

        <div>
          <strong>Aconteceu um problema :(</strong>
        </div>

        <button type="button">
          <FiXCircle size={16} />
        </button>
      </Toast>

      <Toast type="error" hasDescription>
        <FiAlertCircle size={22} />

        <div>
          <strong>Aconteceu um problema :(</strong>
          <p>Não foi possível fazer login na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={16} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
