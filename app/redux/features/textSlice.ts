import { createSlice } from '@reduxjs/toolkit';

interface TextState {
  value: string;
}

const initialState: TextState = {
  value: 'Bu, başlangıç yazısıdır.',
};

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setText: (state, action: { payload: string }) => {
      state.value = action.payload;
    },
  },
});

export const { setText } = textSlice.actions;

export default textSlice.reducer;
