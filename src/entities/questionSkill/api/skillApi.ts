import type { QuestionSkill } from "@/entities/question/model/question";
import { api } from "@/shared/api/api";

export const skillApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSkill: build.query<{ data: QuestionSkill[] }, void>({
      query: () => ({
        url: `/skills`,
      }),
    }),
    getSkillById: build.query({
      query: (id) => ({
        url: `/skills/${id}`,
      }),
    }),
  }),
});

export const { useGetSkillQuery, useGetSkillByIdQuery } = skillApi;
