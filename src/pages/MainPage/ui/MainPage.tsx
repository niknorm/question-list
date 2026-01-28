import { QuestionList } from "@/widgets/QuestionList/QuestionList";
import styles from "./MainPage.module.css";
import SideBar from "@/widgets/SideBar/SideBar";
import { useState } from "react";
import { useGetQuestionsQuery } from "@/entities/question/api/questionApi";
import type { QuestionQueryState } from "@/entities/question/model/question";
import { PaginateQuestions } from "@/features/pagination/ui/PaginateQuestions";

export const MainPage = () => {
  const [questionQueryState, setQuestionQueryState] =
    useState<QuestionQueryState>({
      page: 1,
      limit: 12,
      complexity: [],
      rate: [],
      questionSkills: [],
      questionSpecializations: [],
      title: undefined,
    });

  const { data, isLoading } = useGetQuestionsQuery(questionQueryState);

  const questions = data?.data ?? [];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <QuestionList questions={questions} isLoading={isLoading} />
        <PaginateQuestions
        questionQueryState={questionQueryState}
        setQuestionQueryState={setQuestionQueryState}
        data={data}
      />
      </div>
      

      <div className={styles.sideBar}>
        <SideBar
          questionQueryState={questionQueryState}
          setQuestionQueryState={setQuestionQueryState}
        />
      </div>
    </div>
  );
};
