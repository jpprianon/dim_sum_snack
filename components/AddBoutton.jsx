import styles from "../styles/Add.module.css";

const AddBoutton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddBoutton}>
      Ajouter nouveau Repas
    </div>
  );
};

export default AddBoutton;
