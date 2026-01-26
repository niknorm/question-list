import type { QuestionSpecialization } from "@/entities/question/model/question";
import { api } from "@/shared/api/api";

export const specializationApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSpecialization: build.query<{ data: QuestionSpecialization[] }, void>({
      query: () => ({
        url: `/specializations`,
      }),
    }),
    getSpecializationById: build.query({
      query: (id) => ({
        url: `/specializations/${id}`,
      }),
    }),
  }),
});

export const { useGetSpecializationQuery, useGetSpecializationByIdQuery } =
  specializationApi;
