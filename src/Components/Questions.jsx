import Options from "./Options";
import { useSelector, useDispatch } from "react-redux";
import { setResponseSlice } from "../features/AnswerSlice";

function insertOrUpdateObject(array, newObject) {
  const existingObject = array.find(
    (obj) => obj.questionId === newObject.questionId
  );

  if (existingObject) {
    // Update existing object with new data
    Object.assign(existingObject, newObject);
  } else {
    // Insert new object into the array
    array.push(newObject);
  }
  return array;
}

const initializeResponseList = (question) => {
  let result = [];
  for (let index = 0; index < 10; index++) {
    const EmptyquestionResponse = {
      questionId: question[index].questionId,
      userAnswer: "",
    };
    result.push(EmptyquestionResponse);
  }
  return result;
};

const Questions = ({ questionNum }) => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.getAllQuestions.value);

  const answers = useSelector(
    (state) => state.setAnswerResponse.QuestionResponse
  );

  if (answers.length === 0) {
    dispatch(setResponseSlice(initializeResponseList(question)));
  }

  const getOption = (option) => {
    const questionResponse = {
      questionId: question[questionNum - 1].questionId,
      userAnswer: option,
    };

    dispatch(
      setResponseSlice(
        insertOrUpdateObject(
          JSON.parse(JSON.stringify(answers)),
          questionResponse
        )
      )
    );
  };

  const data = question[questionNum - 1].options;
  return (
    <div>
      <div className="flex items-center pl-8 h-32 w-full text-3xl text-white bg-yellow font-semibold">
        {questionNum}. &nbsp; {question[questionNum - 1].question}
        <br />
      </div>
      <ul className="flex flex-col mt-16 gap-8">
        {Object.keys(data).map(function (keyName) {
          // use keyName to get current key's name
          // and a[keyName] to get its value
          return (
            <Options
              key={keyName}
              isSelected={answers[questionNum - 1]?.userAnswer}
              getOption={getOption}
              option={keyName}
              optionText={data[keyName]}
            />
          );
        })}

        {/* <Options
          isSelected={answers[questionNum - 1]?.userAnswer}
          getOption={getOption}
          option="A"
          optionText={question[questionNum - 1].options.A}
        /> */}
      </ul>
    </div>
  );
};

export default Questions;
