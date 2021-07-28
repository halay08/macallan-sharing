import Head from "next/head";
import styles from "../../../styles/Home.module.css";

type props = {
  imageUrl: string;
  title: string;
};
const Artwork = ({ imageUrl, title }: props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:image" content={imageUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content="" />
      </Head>
      <div className={styles.main}>
        <img alt={title} className={styles.image} src={imageUrl} />
      </div>
    </div>
  );
};

Artwork.getInitialProps = async ({ query }: any) => {
  const { id } = query;

  const firebaseStorage = "https://firebasestorage.googleapis.com/v0/b/";
  const bucket = `${process.env.FIREBASE_STORAGE_BUCKET}/o/images%2F`;
  const imageUrl = firebaseStorage + bucket + id + "?alt=media";
  const title = "Macallan - Create Your Own";

  return {
    imageUrl,
    title,
  };
};

export default Artwork;
