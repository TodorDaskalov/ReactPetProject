import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.gridContainer}>
        <p>Viki's Pet Nursery ©</p>
      </div>
    </footer>
  );
};

export default Footer;
