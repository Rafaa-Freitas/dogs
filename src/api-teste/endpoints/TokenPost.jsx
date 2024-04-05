import React from 'react';

function TokenPost() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    // cat@cat.com.brsadadasdas
    // catdsadada

    // let result = await fetch(
    //   'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ username, password }),
    //   },
    // ).then((response) => {
    //   console.log(response);

    //   return response.json();
    // });

    let result = await fetch(
      'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      },
    ).then((response) => {
      console.log(response);

      return response;
    });

    console.log(result);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <button>Enviar</button>
    </form>
  );
}

export default TokenPost;
