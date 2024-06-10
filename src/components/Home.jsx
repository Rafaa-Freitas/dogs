import React from 'react';
import Feed from './Feed/Feed';
import styles from './Home.module.css';
import LoadingBone from './helpers/LoadingBone';
import Head from './helpers/Head';

function Home() {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site dogs, com o feed de fotos."
      />
      <Feed></Feed>
    </section>
  );
}

export default Home;
