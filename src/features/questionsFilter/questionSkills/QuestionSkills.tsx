import type { QuestionQueryState } from "@/entities/question/model/question";
import { useGetSkillQuery } from "@/entities/questionSkill/api/skillApi";
import { Button } from "@/shared/ui/Button/Button";
import type { Dispatch, SetStateAction } from "react";
import styles from './QuestionSkills.module.css'

interface Props {
  setQuestionQueryState: Dispatch<SetStateAction<QuestionQueryState>>;
  questionQueryState: QuestionQueryState
}

export const QuestionSkills = ({ questionQueryState, setQuestionQueryState }: Props) => {
  const { data, isLoading } = useGetSkillQuery();
  if (isLoading) return <p>Загрузка</p>;
  return (
    <div>
      <p>Навыки</p>
      <div className={styles.skillBlock}>
        {data?.data.map((skill) => (
          <Button
            className={styles.button}
            key={skill.id}
            version="small"
            onClick={() => {
                  const current = questionQueryState.questionSkills ?? [];

                  const next = current.includes(skill.id)
                    ? current.filter((id) => id !== skill.id)
                    : [...current, skill.id];
                    setQuestionQueryState((prev) => ({
                        ...prev,
                        questionSkills: next
                    }))
                  
                }}
          >
            {skill.title}
          </Button>
        ))}
      </div>
    </div>
  );
};
