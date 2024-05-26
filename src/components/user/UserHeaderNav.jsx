import React from 'react';
import { NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MinhasFotos from '../../assets/feed.svg?react';
import Estatisticas from '../../assets/estatisticas.svg?react';
import AdicionarFoto from '../../assets/adicionar.svg?react';
import Sair from '../../assets/sair.svg?react';

import styles from './UserHeaderNav.module.scss';
import useMedia from '../../hooks/useMedia';

function UserHeaderNav() {
  const navigate = useNavigate();
  const mobile = useMedia('(max-width: 40rem)');
  const { userLogout } = React.useContext(UserContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const { pathname } = useLocation();

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function handleLogout() {
    setIsMobileMenuOpen(false);
    userLogout();
    navigate('/login');
  }

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            isMobileMenuOpen && styles.mobileButtonOpen
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.mobileNav : styles.nav} ${
          isMobileMenuOpen && styles.mobileNavOpen
        }`}
      >
        <NavLink to="/conta" end onClick={closeMobileMenu}>
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>

        <NavLink to="/conta/estatisticas" onClick={closeMobileMenu}>
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>

        <NavLink to="/conta/postar" onClick={closeMobileMenu}>
          <AdicionarFoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>

        <button onClick={handleLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
}

export default UserHeaderNav;
