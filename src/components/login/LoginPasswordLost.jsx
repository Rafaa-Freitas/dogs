import React from 'react';
import Input from '../forms/Input';
import Button from '../forms/Button';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import Error from '../helpers/Error';
import { LOST_PASSWORD } from '../../api';
import Head from '../helpers/Head';

function LoginPasswordLost() {
  const login = useForm();
  const { data, isLoading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.isValid(login.value)) {
      const { url, options } = LOST_PASSWORD({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });

      const { json } = await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha?" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <Input
              label="Email / Usuário"
              type="text"
              name="login"
              {...login}
            />
            {isLoading ? (
              <Button disabled>Enviando</Button>
            ) : (
              <Button> Enviar e-mail</Button>
            )}
          </form>
          <Error error={error}></Error>
        </>
      )}
    </section>
  );
}

export default LoginPasswordLost;
