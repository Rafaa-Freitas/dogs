import React from 'react';
import Head from '../helpers/Head';

function UserStats() {
  const [numero, setNumero] = React.useState(1);

  React.useEffect(() => {
    console.log(numero);
  }, [numero]);

  function handleClick() {
    setNumero((numero) => numero + 1);
    setNumero((numero) => numero + 1);
  }

  return (
    <div>
      <Head title="Estatísticas" />
      {numero}
      <button onClick={handleClick}>Aumentar</button>
    </div>
  );
}

export default UserStats;
