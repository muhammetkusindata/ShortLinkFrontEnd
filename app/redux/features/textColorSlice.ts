import { createSlice } from '@reduxjs/toolkit';

interface TextColorState {
  textColor1: string;
}

const initialState: TextColorState = {
  textColor1: '[#3A3960]',
};

export const textColorSlice = createSlice({
  name: 'textColor',
  initialState,
  reducers: {
    setTextColor: (state, action: { payload: string }) => {
      state.textColor1 = action.payload;
    },
  },
});

export const { setTextColor } = textColorSlice.actions;

export default textColorSlice.reducer; 