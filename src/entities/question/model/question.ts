export interface Question {
  id: number;
  title: string;
  description: string;
  code: string;
  imageSrc: string;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  complexity: number;
  rate: number;
  questionSpecialization: QuestionSpecialization[];
  questionSkill: QuestionSkill[];
  total: number;
}

export interface QuestionSpecialization {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

export interface QuestionSkill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

export interface GetQuestionParams {
  page: number;
  limit: number;
  rate?: number[];
  complexity?: number[];
  questionSkills?: number[];
  questionSpecializations?: number[];
  title: string;
}

export interface QuestionQueryState {
  page: number;
  search?: string;
  limit: number;
  complexity: number[] | null;
  rate: number[] | null;
  questionSkills: number[] | null;
  questionSpecializations: number[] | null;
  title: string | undefined;
}

export interface QuestionResponse {
  total: number;
  page: number;
  limit: number;
  data: Question[];
}
