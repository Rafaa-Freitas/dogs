import React from 'react';
import Input from '../forms/Input';
import Button from '../forms/Button';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { RESET_PASSWORD } from '../../api';
import Error from '../helpers/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../helpers/Head';

function LoginPasswordReset() {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');

  const password = useForm();
  const { isLoading, error, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) {
      setKey(key);
    }

    if (login) {
      setLogin(login);
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = RESET_PASSWORD({
      login,
      key,
      password: password.value,
    });

    const { response } = await request(url, options);

    if (response.ok) {
      navigate('/login');
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Resete a senha" />
      <h1 className="title">Resete a senha</h1>

      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />

        {isLoading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>

      <Error error={error} />
    </section>
  );
}

export default LoginPasswordReset;
