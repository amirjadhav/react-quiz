import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import GetResult from "../axios/GetResult";

const SubmitQuiz = () => {
  const [quizResult, setQuizResult] = useState(0);
  const answers = useSelector(
    (state) => state.setAnswerResponse.QuestionResponse
  );

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const result = await GetResult(answers);
        console.log("result");
        console.log(result);
        setQuizResult(result);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchResult();
  }, []);

  return !quizResult ? (
    <p>Loading....</p>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col rounded-2xl items-center text-white bg-yellow p-20 gap-8">
        <div className="text-3xl font-semibold">Your score</div>
        <div className="text-9xl font-bold">{quizResult.score}</div>
      </div>
    </div>
  );
};

export default SubmitQuiz;
