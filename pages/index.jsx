import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from 'next/head'

const HomePage = () => {
  return (
    <>
    <Head>
      <title>Name List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Balochi Name Listing App</h1>
      <p className={styles.description}>
        Explore the rich meanings behind Balochi names.
      </p>
      <Link href="/names">
        <a  className={styles.button}>Explore</a>
      </Link>
    </div>
    </>
  );
};

export default HomePage;
