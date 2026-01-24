import type { QuestionQueryState } from "@/entities/question/model/question";
import { Button } from "@/shared/ui/Button/Button";
import type { Dispatch, SetStateAction } from "react";
import styles from "./QuestionComplexity.module.css";

interface Props {
  setQuestionQueryState: Dispatch<SetStateAction<QuestionQueryState>>;
  questionQueryState: QuestionQueryState
}

const complexity = {
  "1-3": [1, 2, 3],
  "4-6": [4, 5, 6],
  "7-8": [7, 8],
  "9-10": [9, 10],
} 
const complexityEntries = Object.entries(complexity)

export const QuestionComplexity = ({ questionQueryState, setQuestionQueryState }: Props) => {

  return (
    <div>
      <p>Сложность</p>
      <div className={styles.complexityBlock}>
        {complexityEntries.map(([variant, values]) => (
    <Button
    className={styles.button}
        key={variant}
        version="small"
        onClick={() =>
            setQuestionQueryState(prev => ({
                ...prev,
                complexity: values
            }))
        }
    >
        {variant}
    </Button>
))}
      </div>
    </div>
  );
};
