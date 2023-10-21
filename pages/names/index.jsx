import styles from "../../styles/Names.module.css";
import Link from "next/link";
import Head from 'next/head'

export const getStaticProps = async () => {
  const res = await fetch("https://balochi-api.glitch.me/api/names?limit=70");
  const data = await res.json();

  return {
    props: {
      names: data.names,
    },
  };
};

const Names = ({ names }) => {
  return (
    <>
    <Head>
      <title>Name List | All Names</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h1>All Names</h1>
      {names.map((name) => (
        <Link href={'/names/' + name.id} key={name.id}>
          <a className={styles.single}>
            <h3>{name.name} - {name.name_balochi}</h3>
          </a>
        </Link>
      ))}
    </div>
    </>
  );
};

export default Names;
