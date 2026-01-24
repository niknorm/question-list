import arrow from "@/shared/assets/images/arrow.svg";
import styles from "./Toggler.module.css";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

function Toggler({ isOpen, toggle }: Props) {
  return (
    <img
      onClick={toggle}
      className={isOpen ? `${styles.img} ${styles.open}` : styles.img}
      src={arrow}
      alt="arrow"
    />
  );
}

export default Toggler;
