import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Featured from "../components/Featured";
import styles from "../styles/Home.module.css";
import RepasList from "../components/RepasList";
import Ajouter from "../components/Ajouter";
import AddBoutton from "../components/AddBoutton";

export default function Home({ repasList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Dim Sum Snack Réunion</title>
        <meta
          name="description"
          content="Bon repas asiatique a Saint-André Réunion"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {<AddBoutton setClose={setClose}/>}
      <RepasList repasList={repasList} />
      {!close && <Ajouter setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      repasList: res.data,
      admin,
    },
  };
};
