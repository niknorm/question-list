import type { Question } from "@/entities/question/model/question";
import QuestionItem from "@/entities/question/ui/QuestionItem";
import styles from "./QuestionList.module.css";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

interface Props {
  questions: Question[];
  isLoading: boolean;
}

export const QuestionList = ({ questions, isLoading }: Props) => {
  console.log(isLoading);

  return (
    <>
      {isLoading ? (
        <Skeleton count={12} type="item" />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <h1 className={styles.title}>Вопросы</h1>
            <ul className={styles.questionList}>
              {questions.map((question: Question) => (
                <li key={question.id} className={styles.list}>
                  <QuestionItem key={question.id} question={question} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
