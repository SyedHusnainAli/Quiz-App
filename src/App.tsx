import React, { useEffect, useState } from 'react';
import { getQuizDetail } from "./services/quiz_services";
import { Quiz } from "./type/quiz-type";
import QuestionCard from "./component/QuestionCard";
import './App.css';



function App() {

  let [quiz, setQuiz] = useState<Quiz[]>([])
  // getQuizDetail(5, "mth", "easy")
  useEffect(() => {
    async function fetchData() {
      const question: Quiz[] = await getQuizDetail(5, "nae", "abc");
      console.log(question)
      setQuiz(question)
    }
    fetchData()
  }, [])

  return (
    <div >
      <QuestionCard />
    </div>
  );
}

export default App;
