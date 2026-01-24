import { api } from "@/shared/api/api";
import type {
  GetQuestionParams,
  Question,
  QuestionResponse,
} from "../model/question";

export const questionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionResponse, GetQuestionParams>({
      query: (QuestionQueryState) => ({
        url: "questions/public-questions",
        params: {
          page: QuestionQueryState.page,
          limit: QuestionQueryState.limit,
          complexity:
            QuestionQueryState.complexity?.length === 0
              ? undefined
              : QuestionQueryState.complexity,
          rate:
            QuestionQueryState.rate?.length === 0
              ? undefined
              : QuestionQueryState.rate,
          skills:
            QuestionQueryState.questionSkills?.length === 0
              ? undefined
              : QuestionQueryState.questionSkills,
          specializations:
            QuestionQueryState.questionSpecializations?.length === 0
              ? undefined
              : QuestionQueryState.questionSpecializations,
          title: QuestionQueryState.title ?? undefined,
        },
      }),
    }),
    getQuestionById: builder.query<Question, number>({
      query: (id) => `questions/public-questions/${id}`,
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionApi;
