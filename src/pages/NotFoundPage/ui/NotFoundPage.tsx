import { Button } from "@/shared/ui/Button/Button";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className={styles.container}>
      <div className={styles.message}>
        <p className={styles.paragraph}>Такой страницы не существует!</p>
      </div>
      <div className={styles.button}>
        <Link to={"/"}>
          <Button children="На главную" version="large" />
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
