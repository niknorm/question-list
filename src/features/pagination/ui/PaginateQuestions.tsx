import { Pagination } from "@/shared/ui/Pagination/Pagination";
import { usePagination } from "../hooks/usePagination";
import type { Dispatch, SetStateAction } from "react";
import type {
  QuestionQueryState,
  QuestionResponse,
} from "@/entities/question/model/question";

interface Props {
  setQuestionQueryState: Dispatch<SetStateAction<QuestionQueryState>>;
  questionQueryState: QuestionQueryState;
  data: QuestionResponse;
}

export const PaginateQuestions = ({
  setQuestionQueryState,
  questionQueryState,
  data,
}: Props) => {
  const { nextPage, prevPage, selectPage } = usePagination(
    setQuestionQueryState,
  );
  const totalPage = Math.ceil((data?.total ?? 0) / questionQueryState.limit);

  return (
    <Pagination
      page={questionQueryState.page}
      totalPage={totalPage}
      nextPage={nextPage}
      prevPage={prevPage}
      selectPage={selectPage}
    />
  );
};
