import styles from "../styles/RepasList.module.css";
import RepasCard from "./RepasCard";

const RepasList = ({ repasList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>REPAS AUX SAVEUR DICI ET DASIE</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        architecto voluptate quod molestias quisquam placeat eum corporis odio
        nulla, id veritatis sunt laborum inventore enim, aperiam, soluta ex
        necessitatibus eligendi.
      </p>
      <div className={styles.wrapper}>
        {repasList.map((repas) => (
          <RepasCard key={repas._id} repas={repas} />
        ))}
      </div>
    </div>
  );
};

export default RepasList;
