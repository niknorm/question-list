import { useGetQuestionByIdQuery } from "@/entities/question/api/questionApi";
import { Link, useParams } from "react-router-dom";
import styles from "./QuestionPage.module.css";
import arrowLeft from "@/shared/assets/images/arrowLeft.svg";
import txt from "@/shared/assets/images/txt.svg";

const QuestionPage = () => {
  const { id } = useParams();
  const { data: question, isError } = useGetQuestionByIdQuery(Number(id));

  if (isError) return <div>Ошибка</div>;

  return (
    <>
      <div className={styles.link}>
        <img src={arrowLeft} />
        <Link to={"/"}>
          <p>Назад</p>
        </Link>
      </div>
      <main className={styles.layoutWrapper}>
        <div className={styles.layout}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.nameQuestion}>
                <img src={txt} alt="png" />
                <div>
                  <h3>{question?.title}</h3>
                  <p>{question?.description}</p>
                </div>
              </div>
            </div>

            <div className={styles.shortDescription}>
              <h3>Краткий ответ</h3>
              <p>{question?.shortAnswer}</p>
            </div>

            <div className={styles.longAnswer}>
              <h3>Развернутый ответ</h3>
              <p>{question?.longAnswer}</p>
            </div>
          </div>

          <aside className={styles.sideBar}>
            <p>Уровень: </p>
            <div className={styles.rateBlock}>
              <p className={styles.rate}>
                Рейтинг:{" "}
                <span className={styles.rateNumber}>{question?.rate}</span>
              </p>
              <p className={styles.complexity}>
                Сложность:{" "}
                <span className={styles.rateNumber}>
                  {question?.complexity}
                </span>
              </p>{" "}
            </div>
            <p>Навыки:</p>
            <div></div>
          </aside>
        </div>
      </main>
    </>
  );
};

export default QuestionPage;
