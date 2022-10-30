
import React from "react";
import { QuestionPropsType } from "./../type/quiz-type";


const QuestionCard: React.FC<QuestionPropsType> = ({ question, Option, callback }) => {
    console.log(question, Option)
    return (
        <div className="question-container">
            <h1>hallo</h1>
            <div className="question">
                {question}
            </div>
            <form onSubmit={callback}>
                {
                    Option.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input type="radio" name="opt" value={opt} />
                                    {opt}
                                </label>
                            </div>
                        )
                    })
                }

                <input type="submit" />
            </form>
        </div>
    )
}

export default QuestionCard