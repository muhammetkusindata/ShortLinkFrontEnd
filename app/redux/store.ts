import { configureStore } from '@reduxjs/toolkit';
import textReducer from '@/app/redux/features/textSlice';
import themeColorReducer from '@/app/redux/features/themeColorSlice';
import textColorReducer from '@/app/redux/features/textColorSlice';
export const store = configureStore({
  reducer: {
    text: textReducer,
    themeColor: themeColorReducer,
    textColor: textColorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
