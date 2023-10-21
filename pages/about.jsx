import styles from '../styles/About.module.css';
import Head from 'next/head'

const AboutPage = () => {
  return (
    <>
    <Head>
      <title>Name List | About</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>About Balochi Name Listing</h1>
      <p className={styles.description}>
        We're dedicated to preserving and promoting the beautiful Balochi
        language through its names and meanings.
      </p>
      <p className={styles.description}>
        Our mission is to provide a platform for Balochi speakers and enthusiasts
        to explore, learn, and celebrate the significance of names in our culture.
      </p>
    </div>
    </>
  );
};

export default AboutPage;
