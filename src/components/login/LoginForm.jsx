import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../forms/Input';
import Button from '../forms/Button';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.isValid() && password.isValid()) {
      userLogin(username.value, password.value);
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

        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </div>
  );
}

export default LoginForm;
