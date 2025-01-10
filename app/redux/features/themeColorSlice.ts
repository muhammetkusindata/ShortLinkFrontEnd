import { createSlice } from '@reduxjs/toolkit';

interface ThemeColorState {
  themeColor1: string;
}

const initialState: ThemeColorState = {
  themeColor1: '[#FAFFC5]',
};

export const themeColorSlice = createSlice({
  name: 'themeColor',
  initialState,
  reducers: {
    setThemeColor: (state, action: { payload: string }) => {
      state.themeColor1 = action.payload;
    },
  },
});

export const { setThemeColor } = themeColorSlice.actions;

export default themeColorSlice.reducer; 