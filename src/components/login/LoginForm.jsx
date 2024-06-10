import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../forms/Input';
import Button from '../forms/Button';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../helpers/Error';

import styles from './LoginForm.module.scss';
import stylesButton from '../forms/Button.module.scss';
import Head from '../helpers/Head';

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, isLoading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.isValid() && password.isValid()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
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

        {isLoading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        <Error error={error} />
      </form>

      <Link className={styles.perdeuSenha} to="/login/perdeu">
        Perdeu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.cadastroSubtitle}>Cadastre-se</h2>

        <p>Ainda não possui conta? Cadastre-se no site.</p>

        <Link className={stylesButton.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
}

export default LoginForm;
