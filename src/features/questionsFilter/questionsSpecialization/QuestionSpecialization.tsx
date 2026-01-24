import type { QuestionQueryState } from "@/entities/question/model/question";
import { useGetSpecializationQuery } from "@/entities/questionSpecialization/api/specializationApi";
import { Button } from "@/shared/ui/Button/Button";
import type { Dispatch, SetStateAction } from "react";
import styles from "./QuestionSpecialization.module.css";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

interface Props {
  setQuestionQueryState: Dispatch<SetStateAction<QuestionQueryState>>;
  questionQueryState: QuestionQueryState;
}

export const QuestionsSpecialization = ({
  questionQueryState,
  setQuestionQueryState,
}: Props) => {
  const { data, isLoading } = useGetSpecializationQuery();
  return (
    <>
      {isLoading ? (
        <Skeleton count={10} type="item" />
      ) : (
        <div className={styles.container}>
          <p>Специализация</p>
          <div className={styles.specBlock}>
            {data?.data.map((spec) => (
              <Button
                key={spec.id}
                className={styles.button}
                version="small"
                onClick={() =>
                  setQuestionQueryState((prev) => ({
                    ...prev,
                    questionSkills: [spec.id],
                  }))
                }
              >
                {spec.title}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
