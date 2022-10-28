import React, { useEffect } from 'react';
import { getQuizDetail } from "./services/quiz_services";
import './App.css';

function App() {
  // getQuizDetail(5, "mth", "easy")
  useEffect(() => {
    async function fetchData() {
      const question = await getQuizDetail(10, "nae", "abc");
      console.log(question)
    }
    fetchData()
  }, [])

  return (
    <div >

    </div>
  );
}

export default App;
