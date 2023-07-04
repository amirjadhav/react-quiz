import { configureStore } from '@reduxjs/toolkit'
import getAllQuestionsReducer from '../features/QuestionSlice'
import setAnswerResponseReducer from '../features/AnswerSlice'

export default configureStore({
    reducer: {
        getAllQuestions: getAllQuestionsReducer,
        setAnswerResponse: setAnswerResponseReducer
    },
})