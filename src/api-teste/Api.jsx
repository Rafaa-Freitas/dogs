import React from 'react';
import UserPost from './endpoints/UserPost';
import TokenPost from './endpoints/TokenPost';
import PhotoPost from './endpoints/PhotoPost';
import PhotoGet from './endpoints/PhotoGet';

function Api() {
  return (
    <div>
      <h2>User Post</h2>
      <UserPost></UserPost>
      <h2>Token Request</h2>
      <TokenPost></TokenPost>
      <h2>PHOTO POST</h2>
      <PhotoPost></PhotoPost>
      <h2>PHOTO GET</h2>
      <PhotoGet></PhotoGet>
    </div>
  );
}

export default Api;
