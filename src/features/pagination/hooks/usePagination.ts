import type { QuestionQueryState } from "@/entities/question/model/question";

export const usePagination = (
  setQuestionQueryState: React.Dispatch<
    React.SetStateAction<QuestionQueryState>
  >,
) => {
  const nextPage = () => {
    setQuestionQueryState((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const prevPage = () => {
    setQuestionQueryState((prev) => ({ ...prev, page: prev.page - 1 }));
  };

  const selectPage = (page: number) => {
    setQuestionQueryState((prev) => ({ ...prev, page }));
  };

  return { nextPage, prevPage, selectPage };
};
