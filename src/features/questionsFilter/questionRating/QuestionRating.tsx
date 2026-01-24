import type { QuestionQueryState } from "@/entities/question/model/question";
import { Button } from "@/shared/ui/Button/Button";
import type { Dispatch, SetStateAction } from "react";
import styles from "./QuestionRating.module.css";

interface Props {
  setQuestionQueryState: Dispatch<SetStateAction<QuestionQueryState>>;
  questionQueryState: QuestionQueryState
}

export const QuestionRating = ({ questionQueryState, setQuestionQueryState }: Props) => {
  const rating = [1, 2, 3, 4, 5];

  return (
    <div>
      <p>Рейтинг</p>
      <div className={styles.ratingBlock}>
        {rating.map((rate, index) => (
          <Button
            className={styles.button}
            key={index}
            version="small"
            onClick={() => {
                const current = questionQueryState.rate ?? []
                
                const next = current.includes(rate)
                ? current.filter((variant) => variant !== rate)
                : [...current, rate]
                setQuestionQueryState((prev) => ({
                    ...prev,
                    rate: next

                }))

            } 
        }>
            {rate}
          </Button>
        ))}
      </div>
    </div>
  );
};
