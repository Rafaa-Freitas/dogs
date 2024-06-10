import React from 'react';
import Input from '../forms/Input';
import Button from '../forms/Button';
import useForm from '../../hooks/useForm';
import { CREATE_USER } from '../../api';
import { UserContext } from '../../UserContext';
import useFetch from '../../hooks/useFetch';
import Error from '../helpers/Error';
import Head from '../helpers/Head';

function LoginCreate() {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  const { isLoading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (!username.isValid() && !email.isValid() && !password.isValid()) {
      return;
    }

    const { url, options } = CREATE_USER({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);

    if (response.ok) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Crie sua conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {isLoading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
}

export default LoginCreate;
