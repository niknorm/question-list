import { Button } from "@/shared/ui/Button/Button";
import styles from "./Header.module.css";
import logo from "@/shared/assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoName}>
        <img src={logo} className={styles.logo}></img>
        <Link to={"/"}>
          <h1 className={styles.name}>Yeahub</h1>
        </Link>
        <nav className={styles.nav}>
          <NavLink to={"*"}>
            <p>База вопросов</p>
          </NavLink>
          <NavLink to={"*"}>
            <p>Тренажер</p>
          </NavLink>
        </nav>
      </div>
      <div className={styles.registration}>
        <Link to={"*"}>
          <Button version="standart" children="Вход" />
        </Link>
        <Link to={"*"}>
          <Button version="large" children="Регистрация" />
        </Link>
      </div>
    </header>
  );
};
