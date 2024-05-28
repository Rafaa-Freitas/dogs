import React from 'react';
import Feed from './Feed/Feed';
import styles from './Home.module.css';

function Home() {
  return (
    <section className="container mainContainer">
      <Feed></Feed>
    </section>
  );
}

export default Home;
