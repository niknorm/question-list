import type { QuestionQueryState } from "@/entities/question/model/types";
import type { Dispatch, SetStateAction } from "react";
import styles from "./Search.module.css";


interface Props {
  setQuestionQueryState: Dispatch<SetStateAction<QuestionQueryState>>;
}
export const Search = ({ setQuestionQueryState }: Props) => {
  return (
    <input
      className={styles.input}
      placeholder="Введите запрос..."
      onChange={(e) =>
        setQuestionQueryState((prev) => ({
          ...prev,
          title: e.target.value.trim().toLowerCase(),
          page: 1
          
        }))
      }
      
    />
  );
};
