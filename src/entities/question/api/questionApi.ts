import { api } from "@/shared/api/api";
import type {
  GetQuestionParams,
  Question,
  QuestionResponse,
} from "../model/question";
import { normalizeParams } from "@/shared/libs/normalizeParams";

export const questionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionResponse, GetQuestionParams>({
      query: (questionQueryState) => ({
        url: "questions/public-questions",
        params: {
          page: questionQueryState.page,
          limit: questionQueryState.limit,
          complexity: normalizeParams(questionQueryState.complexity),
          rate: normalizeParams(questionQueryState.rate),
          skills: normalizeParams(questionQueryState.questionSkills),
          specializations: normalizeParams(
            questionQueryState.questionSpecializations,
          ),
          title: normalizeParams(questionQueryState.title),
        },
      }),
    }),
    getQuestionById: builder.query<Question, number>({
      query: (id) => `questions/public-questions/${id}`,
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionApi;
