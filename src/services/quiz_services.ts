
import { Quiz ,QuestionType} from "./../type/quiz-type"

const shuffleArray = (array: any[]) => 
[...array].sort(() => Math.random() -1.5)


export const getQuizDetail = async(amount: number):Promise<QuestionType[]>=>{
    const res = await fetch(`https://opentdb.com/api.php?amount=${amount}`)
    let {results} = await res.json();
    const quiz:QuestionType[] = results.map((questionObj: Quiz) =>{
        return{
         question: questionObj.question,
         answer: questionObj.correct_answer,
         Option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    
     return quiz;
}