import React from 'react';
import UserPost from './endpoints/UserPost';
import TokenPost from './endpoints/TokenPost';

function Api() {
  return (
    <div>
      <h1>User Post</h1>
      <UserPost></UserPost>
      <h1>Token Request</h1>
      <TokenPost></TokenPost>
    </div>
  );
}

export default Api;
