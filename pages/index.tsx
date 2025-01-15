import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { steps } from "./const";

// Display the steps, and the elements within
// We must be able to display or not the non-required elements

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next technical test</title>
        <meta name="description" content="Next technical test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/*Insert code here*/}
      </main>
    </div>
  );
};

export default Home;
