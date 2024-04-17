import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../forms/Input';
import Button from '../forms/Button';
import useForm from '../../hooks/useForm';
import { GET_USER, TOKEN_POST } from '../../Api';

function LoginForm() {
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = GET_USER(token);

    const response = await fetch(url, options);
    const json = await response.json();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.isValid() && password.isValid()) {
      const { url, options } = TOKEN_POST({
        username: username,
        password: password,
      });

      const response = await fetch(url, options);
      const json = await response.json();

      window.localStorage.setItem('token', json.token);

      getUser(json.token);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          type="text"
          name="username"
          {...username}
        ></Input>
        <Input
          label="Senha"
          type="password"
          name="password"
          {...password}
        ></Input>

        <Button disabled>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </div>
  );
}

export default LoginForm;
