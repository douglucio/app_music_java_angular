import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateUser } from "../service/userApi";

const EditUser = () => {
  const history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    // chamar a API para obter os dados do usuário com o ID fornecido nos parâmetros da URL
    // atualizar o estado do componente com os dados do usuário obtidos da API
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateUser(user); // chamar a API para atualizar o usuário
    history.push("/users"); // redirecionar para a página de listagem de usuários após a atualização
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div>
      <h2>Editar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditUser;
