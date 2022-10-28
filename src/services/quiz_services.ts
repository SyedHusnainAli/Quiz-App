
import { Quiz} from "./../type/quiz-type"

export const getQuizDetail = async(amount: number, category: string, difficulty:string):Promise<Quiz[]>=>{
    const res = await fetch(`https://opentdb.com/api.php?amount=${amount}`)
    let {results} = await res.json();
    const quiz = results.map((questionObj: Quiz) =>{
        return{
         question: questionObj.question,
         answer: questionObj.correct_answer,
         Option: questionObj.incorrect_answers.concat(questionObj.correct_answer)
        }
    })
    
     return quiz;
}