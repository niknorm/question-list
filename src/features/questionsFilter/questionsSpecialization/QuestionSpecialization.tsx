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
            {data?.data.map((spec) => {
              const isActive =
                questionQueryState.questionSpecializations?.includes(spec.id);
              return (
                <Button
                  key={spec.id}
                  className={`${styles.button} ${isActive ? styles.active : ""}`}
                  version="small"
                  onClick={() => {
                    const current =
                      questionQueryState.questionSpecializations ?? [];

                    const next = current.includes(spec.id)
                      ? current.filter((id) => id !== spec.id)
                      : [...current, spec.id];
                    setQuestionQueryState((prev) => ({
                      ...prev,
                      questionSpecializations: next,
                      page: 1,
                    }));
                  }}
                >
                  {spec.title}
                </Button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
