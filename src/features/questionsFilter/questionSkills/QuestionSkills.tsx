import type { QuestionQueryState } from "@/entities/question/model/question";
import { useGetSkillQuery } from "@/entities/questionSkill/api/skillApi";
import { Button } from "@/shared/ui/Button/Button";
import type { Dispatch, SetStateAction } from "react";
import styles from "./QuestionSkills.module.css";

interface Props {
  setQuestionQueryState: Dispatch<SetStateAction<QuestionQueryState>>;
  questionQueryState: QuestionQueryState;
}

export const QuestionSkills = ({
  questionQueryState,
  setQuestionQueryState,
}: Props) => {
  const { data, isLoading } = useGetSkillQuery();
  if (isLoading) return <p>Загрузка</p>;
  return (
    <div>
      <p>Навыки</p>
      <div className={styles.skillBlock}>
        {data?.data.map((skill) => {
          const isActive = questionQueryState.questionSkills?.includes(
            skill.id,
          );

          return (
            <Button
              key={skill.id}
              version="standart"
              className={`${styles.button} ${isActive ? styles.active : ""}`}
              onClick={() =>
                setQuestionQueryState((prev) => {
                  const current = prev.questionSkills ?? [];
                  const next = current.includes(skill.id)
                    ? current.filter((id) => id !== skill.id)
                    : [...current, skill.id];
                  return { ...prev, questionSkills: next, page: 1 };
                })
              }
            >
              {skill.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
