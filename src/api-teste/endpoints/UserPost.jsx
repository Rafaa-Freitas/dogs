import React from 'react';

function UserPost() {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    let result = await fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    }).then((response) => {
      console.log(response);

      return response.json();
    });

    console.log(result);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />

      <button>Enviar</button>
    </form>
  );
}

export default UserPost;
