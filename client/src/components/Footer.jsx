import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.socials}>
          <a href="#">icon</a>
          <a href="#">icon</a>
          <a href="#">icon</a>
          <a href="#">icon</a>
        </div>
        <p>Viki's Pet Nursery ©</p>
      </div>
    </footer>
  );
};

export default Footer;
