import { Search } from "@/features/questionsFilter/search/Search"
import styles from './SideBar.module.css'
import { QuestionsSpecialization } from "@/features/questionsFilter/questionsSpecialization/QuestionSpecialization"
import { QuestionSkills } from "@/features/questionsFilter/questionSkills/QuestionSkills"
import type { QuestionQueryState } from "@/entities/question/model/question"
import type { Dispatch, SetStateAction } from "react"
import { QuestionComplexity } from "@/features/questionsFilter/questionComplexity/QuestionComplexity"
import { QuestionRating } from "@/features/questionsFilter/questionRating/QuestionRating"

interface SideBarProps {
  questionQueryState: QuestionQueryState;
  setQuestionQueryState: Dispatch<SetStateAction<QuestionQueryState>>
}

function SideBar({questionQueryState, setQuestionQueryState}: SideBarProps) {
  return (
    <div className={styles.sideBar}>
        <Search setQuestionQueryState={setQuestionQueryState} />
        <QuestionsSpecialization setQuestionQueryState={setQuestionQueryState} questionQueryState={questionQueryState} />
        <QuestionSkills setQuestionQueryState={ setQuestionQueryState} questionQueryState={questionQueryState} />
        <QuestionComplexity setQuestionQueryState={setQuestionQueryState} questionQueryState={questionQueryState} />
        <QuestionRating setQuestionQueryState={setQuestionQueryState} questionQueryState={questionQueryState} />
    </div>
  )
}

export default SideBar