import type { QuestionQueryState } from "@/entities/question/model/question";
import { Button } from "@/shared/ui/Button/Button";
import type { Dispatch, SetStateAction } from "react";
import styles from "./QuestionComplexity.module.css";

interface Props {
  setQuestionQueryState: Dispatch<SetStateAction<QuestionQueryState>>;
  questionQueryState: QuestionQueryState;
}

const complexity = {
  "1-3": [1, 2, 3],
  "4-6": [4, 5, 6],
  "7-8": [7, 8],
  "9-10": [9, 10],
};
const complexityEntries = Object.entries(complexity);

export const QuestionComplexity = ({
  questionQueryState,
  setQuestionQueryState,
}: Props) => {
  return (
    <div>
      <p>Сложность</p>
      <div className={styles.complexityBlock}>
        {complexityEntries.map(([label, values]) => {
          const isActive = values.every((v) =>
            questionQueryState.complexity?.includes(v),
          );
          return (
            <Button
              className={`${styles.button} ${isActive ? styles.active : ""}`}
              key={label}
              version="small"
              onClick={() => {
                const current = questionQueryState.complexity ?? [];

                const selected = values.every((v) => current.includes(v));

                const next = selected
                  ? current.filter((v) => !values.includes(v))
                  : [...current, ...values];

                setQuestionQueryState((prev) => ({
                  ...prev,
                  complexity: next,
                  page: 1,
                }));
              }}
            >
              {label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
