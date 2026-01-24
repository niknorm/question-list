import { QuestionList } from "@/widgets/QuestionList/QuestionList";
import { Pagination } from "@/shared/ui/Pagination/Pagination";
import styles from "./MainPage.module.css";
import SideBar from "@/widgets/SideBar/SideBar";
import { useState } from "react";
import { usePagination } from "@/features/pagination/hooks/usePagination";
import { useGetQuestionsQuery } from "@/entities/question/api/questionApi";
import type { QuestionQueryState } from "@/entities/question/model/question";

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

  const { nextPage, prevPage, selectPage } = usePagination(
    setQuestionQueryState,
  );

  const { data, isLoading } = useGetQuestionsQuery(questionQueryState);

  const questions = data?.data ?? [];
  const totalPage = Math.ceil((data?.total ?? 0) / questionQueryState.limit);


  return (

    <div className={styles.wrapper}>
      <div className={styles.container}>
        <QuestionList  questions={questions} isLoading={isLoading}/>
        <Pagination
          page={questionQueryState.page}
          totalPage={totalPage}
          nextPage={nextPage}
          prevPage={prevPage}
          selectPage={selectPage}
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
