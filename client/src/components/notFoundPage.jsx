import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>404 - Not Found</h1>
      <p className={styles.message}>Sorry, the page you are looking for might be in another universe.</p>
    </div>
  );
};

export default NotFoundPage;
