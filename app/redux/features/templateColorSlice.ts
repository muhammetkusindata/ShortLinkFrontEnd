import { createSlice } from '@reduxjs/toolkit';

interface templateColorState {
  themeColor1: string;
  textColor1: string;
}

const initialState: templateColorState = {
  themeColor1: '[#FAFFC5]',
  textColor1: '[#3A3960]',
};

export const templateColorSlice = createSlice({
  name: 'templateColor',
  initialState,
  reducers: {
    setTemplateColor: (state, action: { payload: string }) => {
      state.themeColor1 = action.payload;
    },
  },
});

export const { setTemplateColor } = templateColorSlice.actions;

export default templateColorSlice.reducer;