import type { QuestionQueryState } from "@/entities/question/model/question";
import type { Dispatch, SetStateAction } from "react";

import styles from "./QuestionRating.module.css";
import { ButtonFilter } from "@/shared/ui/ButtonFilter/ButtonFilter";

interface Props {
  setQuestionQueryState: Dispatch<SetStateAction<QuestionQueryState>>;
  questionQueryState: QuestionQueryState;
}

export const QuestionRating = ({
  questionQueryState,
  setQuestionQueryState,
}: Props) => {
  const ratingOptions = [1, 2, 3, 4, 5].map((rate) => ({
    value: rate,
    label: String(rate),
  }));

  return (
    <div>
      <p>Рейтинг</p>

      <ButtonFilter
        options={ratingOptions}
        selectedValues={questionQueryState.rate ?? []}
        className={styles.ratingBlock}
        buttonClassName={styles.button}
        onChange={(nextValues) =>
          setQuestionQueryState((prev) => ({
            ...prev,
            rate: nextValues,
            page: 1,
          }))
        }
      />
    </div>
  );
};
