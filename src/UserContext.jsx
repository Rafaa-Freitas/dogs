import React from 'react';
import { GET_USER, TOKEN_POST, VALIDATE_TOKEN_POST } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [isLogged, setIsLogged] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const getUserResponse = await fetch(url, options);
    const json = await getUserResponse.json();

    setData(json);
    setIsLogged(true);
  }

  async function userLogin(username, password) {
    setError(null);
    setIsLoading(true);

    try {
      const { url, options } = TOKEN_POST({ username, password });

      const tokenResponse = await fetch(url, options);
      const { message, token } = await tokenResponse.json();

      if (!tokenResponse.ok) {
        throw new Error(`Erro: ${message}`);
      }

      window.localStorage.setItem('token', token);

      await getUser(token);
      navigate('/conta');
    } catch (error) {
      setError(error.message);
      setIsLogged(false);
    } finally {
      setIsLoading(false);
    }
  }

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setIsLoading(false);
      setIsLogged(false);

      window.localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate],
  );

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');

      if (!token) {
        setIsLogged(false);
        return;
      }

      setError(null);
      setIsLoading(true);

      try {
        const { url, options } = VALIDATE_TOKEN_POST(token);

        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Token inválido');
        }

        await getUser(token);
      } catch (error) {
        userLogout();
      } finally {
        setIsLoading(false);
      }
    }

    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, isLoading, isLogged }}
    >
      {children}
    </UserContext.Provider>
  );
};
