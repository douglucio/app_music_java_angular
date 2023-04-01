import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo ao Meu Site de Músicas</h1>
      <p>Esta é a página inicial do site.</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/users">Listar usuarios</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
