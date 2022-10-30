import React, { useEffect, useState } from 'react';
import { getQuizDetail } from "./services/quiz_services";
import { QuestionType } from "./type/quiz-type";
import QuestionCard from "./component/QuestionCard";
import './App.css';



function App() {

  let [quiz, setQuiz] = useState<QuestionType[]>([])
  let [currentStep, setCurrentStep] = useState(0)
  useEffect(() => {
    async function fetchData() {
      const question: QuestionType[] = await getQuizDetail(5);
      console.log(question)
      setQuiz(question)
    }
    fetchData()
  }, [])
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (currentStep !== quiz.length - 1)
      setCurrentStep(++currentStep)
    else {
      alert("Quiz Completed")
      setCurrentStep(0)
    }
  }
  if (!quiz.length)
    return <h3>loading...</h3>
  return (
    <div className='App'>
      <QuestionCard
        Option={quiz[currentStep].Option}
        question={quiz[currentStep].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
