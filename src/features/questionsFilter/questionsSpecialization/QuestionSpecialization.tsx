import type { QuestionQueryState } from "@/entities/question/model/question";
import { useGetSpecializationQuery } from "@/entities/questionSpecialization/api/specializationApi";
import type { Dispatch, SetStateAction } from "react";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import styles from "./QuestionSpecialization.module.css";
import { ButtonFilter } from "@/shared/ui/ButtonFilter/ButtonFilter";

interface Props {
  setQuestionQueryState: Dispatch<SetStateAction<QuestionQueryState>>;
  questionQueryState: QuestionQueryState;
}

export const QuestionSpecialization = ({
  questionQueryState,
  setQuestionQueryState,
}: Props) => {
  const { data, isLoading } = useGetSpecializationQuery();

  if (isLoading) {
    return <Skeleton count={6} type="item" />;
  }

  const specializationOptions =
    data?.data.map((spec) => ({
      value: spec.id,
      label: spec.title,
    })) ?? [];

  return (
    <div className={styles.container}>
      <p>Специализация</p>

      <ButtonFilter
        options={specializationOptions}
        selectedValues={questionQueryState.questionSpecializations ?? []}
        className={styles.specBlock}
        buttonClassName={styles.button}
        onChange={(nextValues) =>
          setQuestionQueryState((prev) => ({
            ...prev,
            questionSpecializations: nextValues,
            page: 1,
          }))
        }
      />
    </div>
  );
};
