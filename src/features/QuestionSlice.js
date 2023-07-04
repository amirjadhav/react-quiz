import { createSlice } from '@reduxjs/toolkit';

const QuestionSlice = createSlice({
    name: 'question',
    initialState: {
        value: []

    },
    reducers: {
        setQuestionSlice: (state, action) => {
            state.value = action.payload;
        }

    },
});

export const { setQuestionSlice } = QuestionSlice.actions;
export default QuestionSlice.reducer;