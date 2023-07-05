import { useEffect, useState } from "react";
import GetAllQuiestions from "../axios/GetAllQuestions";

import { useDispatch } from "react-redux";
import { setQuestionSlice } from "../features/QuestionSlice";
import Questions from "./Questions";
import { useNavigate } from "react-router-dom";

const StartQuiz = () => {
  const navigate = useNavigate();
  const [questionNum, setQuestionNum] = useState(1);
  const dispatch = useDispatch();
  const [questionsList, setQuestionsList] = useState();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await GetAllQuiestions();

        setQuestionsList(response);
        dispatch(setQuestionSlice(response));
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchQuestions();
  }, []);
  return !questionsList ? (
    <p>loading...</p>
  ) : (
    <div className="m-20">
      <div className="border-solid border-2 h-auto border-purple">
        <Questions questionNum={questionNum} />
        <div className="flex justify-between mx-24 mt-32 mb-12">
          <button
            className="flex justify-center items-center bg-dark-peach h-20 w-32 text-white font-bold text-2xl"
            onClick={() => {
              navigate("/submit-quiz");
            }}
          >
            End Test
          </button>
          <div className="flex gap-16 mr-16">
            <button
              className={`${questionNum === 1 ? "hidden" : ""}
              ${
                questionNum === 10 ? "mr-48" : ""
              } flex justify-center items-center bg-yellow  h-20 w-32 text-white font-bold text-2xl`}
              onClick={() => {
                setQuestionNum(questionNum - 1);
              }}
            >
              Prev
            </button>
            <button
              className={`${
                questionNum === 10 ? "hidden" : ""
              } flex justify-center items-center bg-yellow  h-20 w-32 text-white font-bold text-2xl`}
              onClick={() => {
                setQuestionNum(questionNum + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartQuiz;
