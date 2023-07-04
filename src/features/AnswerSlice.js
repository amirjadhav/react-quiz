import { createSlice } from '@reduxjs/toolkit';
const AnswerSlice = createSlice({
    name: 'answer',
    initialState: {
        QuestionResponse: [],
    },
    reducers: {
        setResponseSlice: (state, action) => {
            state.QuestionResponse = action.payload;
        }

    },
});

export const { setResponseSlice } = AnswerSlice.actions;
export default AnswerSlice.reducer;