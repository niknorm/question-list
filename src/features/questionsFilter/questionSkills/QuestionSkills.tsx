import type { QuestionQueryState } from "@/entities/question/model/question";
import { useGetSkillQuery } from "@/entities/questionSkill/api/skillApi";
import type { Dispatch, SetStateAction } from "react";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import styles from "./QuestionSkills.module.css";
import { ButtonFilter } from "@/shared/ui/ButtonFilter/ButtonFilter";

interface Props {
  setQuestionQueryState: Dispatch<SetStateAction<QuestionQueryState>>;
  questionQueryState: QuestionQueryState;
}

export const QuestionSkills = ({
  questionQueryState,
  setQuestionQueryState,
}: Props) => {
  const { data, isLoading } = useGetSkillQuery();

  if (isLoading) {
    return <Skeleton count={6} type="item" />;
  }

  const skillOptions =
    data?.data.map((skill) => ({
      value: skill.id,
      label: skill.title,
    })) ?? [];

  return (
    <div>
      <p>Навыки</p>

      <ButtonFilter
        options={skillOptions}
        selectedValues={questionQueryState.questionSkills ?? []}
        className={styles.skillBlock}
        buttonClassName={styles.button}
        onChange={(nextValues) =>
          setQuestionQueryState((prev) => ({
            ...prev,
            questionSkills: nextValues,
            page: 1,
          }))
        }
      />
    </div>
  );
};
