import React from 'react';

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
      {numero}
      <button onClick={handleClick}>Aumentar</button>
    </div>
  );
}

export default UserStats;
