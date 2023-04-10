import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH MIAM DES REPAS AUX SAVEURS ASIATIQUE.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>TROUVER NOTRE SNACK</h1>
          <p className={styles.text}>
            <br /> Saint-André, 97440
            <br /> 1433 Chemin Lefagueyes
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HORAIRES</h1>
          <p className={styles.text}>
            MARDI AU SAMEDI
            <br /> 11:30 - 14:00
          </p>
          <p className={styles.text}>
            LE SOIR - MERCREDI ET VENDREDI
            <br /> 16:30 - 19:30
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
