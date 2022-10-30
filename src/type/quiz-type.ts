import React from "react"

export type  Quiz  = {

category: string
correct_answer: string
difficulty: string
incorrect_answers: string[]
question: string
type: string

}


export type QuestionType = {
    question: string
    answer: string
    Option: string[]
}

export type QuestionPropsType = {
    question: String
    Option: string[]
    callback:(e:React.FormEvent<EventTarget>)=>void
}