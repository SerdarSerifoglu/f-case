import styles from "./listTitle.module.css";

const ListTitle = ({ title }) => {
  return (
    <div className={styles["list-title"]}>
      <div className={styles["list-title__content"]}>{title}</div>
    </div>
  );
};

export default ListTitle;
