import { useState } from "react";
import type { Question } from "../model/question";
import styles from "./QuestionItem.module.css";
import Toggler from "@/shared/ui/Toggler/Toggler";
import { Button } from "@/shared/ui/Button/Button";
import { Link } from "react-router-dom";
import Vector from "@/shared/assets/images/Vector.svg";
import questionImg from "@/shared/assets/images/questionImg.svg";

interface Props {
  question: Question;
}

function QuestionItem({ question }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div>{question.title}</div>
        <div>
          <Toggler isOpen={isOpen} toggle={toggle} />
        </div>
      </div>
      <div className={styles.openBlock}>
        {isOpen ? (
          <>
            <div className={styles.rateBlock}>
              <p className={styles.rate}>
                Рейтинг:{" "}
                <span className={styles.rateNumber}>{question.rate}</span>
              </p>
              <p className={styles.complexity}>
                Сложность:{" "}
                <span className={styles.rateNumber}>{question.complexity}</span>
              </p>{" "}
            </div>
            <div>
              <img src={questionImg} alt="img" />
            </div>

            {question.shortAnswer}
            <div className={styles.button}>
              <Link to={`/question/${question.id}`}>
                <Button children="Подробнее" version="standart" />
                <img src={Vector} alt="vector" />
              </Link>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default QuestionItem;
