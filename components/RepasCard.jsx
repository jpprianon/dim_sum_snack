import Image from "next/image";
import styles from "../styles/RepasCard.module.css";
import Link from "next/link";

const RepasCard = ({ repas }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${repas._id}`} passHref>
        <Image src={repas.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{repas.title}</h1>
      <span className={styles.price}>{repas.prices[0]}€</span>
      <p className={styles.desc}>{repas.desc}</p>
    </div>
  );
};

export default RepasCard;
