import styles from "../../styles/NameDetails.module.css";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch("https://balochi-api.glitch.me/api/names?limit=70");
  const data = await res.json();

  const paths = data.names.map((name) => {
    return {
      params: { id: name.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://balochi-api.glitch.me/api/names/id/" + id);
  const data = await res.json();

  return {
    props: {
      name: data[0],
    },
  };
};

const Details = ({ name }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className={styles.nameDetailsContainer}>
      <button onClick={handleGoBack} className={styles.backButton}>
        <span>&#8617;</span> Back
      </button>

      <h1 className={styles.nameTitle}>{name.name}</h1>
      <p className={styles.nameBalochi}>{name.name_balochi}</p>
      <div className={styles.details}>
        <p>
          <strong>Gender:</strong> {name.gender}
        </p>
        <p>
          <strong>Meaning:</strong> {name.meaning}
        </p>
        <p>
          <strong>Meaning (Balochi):</strong> {name.meaning_balochi}
        </p>
      </div>
    </div>
  );
};

export default Details;
