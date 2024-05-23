import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.scss';
import { useLocation } from 'react-router-dom';

function UserHeader() {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const rotaArray = location.pathname.split('/');
    switch (rotaArray.pop()) {
      case 'conta':
        setTitle('Minha conta');
        return;

      case 'estatisticas':
        setTitle('Estatísticas');
        return;

      case 'postar':
        setTitle('Poste sua foto');
        return;
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}

export default UserHeader;
