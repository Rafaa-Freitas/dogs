import React from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MinhasFotos from '../../assets/feed.svg?react';
import Estatisticas from '../../assets/estatisticas.svg?react';
import AdicionarFoto from '../../assets/adicionar.svg?react';
import Sair from '../../assets/sair.svg?react';

import styles from './UserHeaderNav.module.scss';

function UserHeaderNav() {
  const navigate = useNavigate();
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <MinhasFotos />
        {!!mobile ?? 'Minhas Fotos'}
      </NavLink>

      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {!!mobile ?? 'Estatísticas'}
      </NavLink>

      <NavLink to="/conta/postar">
        <AdicionarFoto />
        {!!mobile ?? 'Adicionar Foto'}
      </NavLink>

      <button onClick={handleLogout}>
        <Sair />
        {!!mobile ?? 'Sair'}
      </button>
    </nav>
  );
}

export default UserHeaderNav;
