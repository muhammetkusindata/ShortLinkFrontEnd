import { configureStore } from '@reduxjs/toolkit';
import textReducer from '@/app/redux/features/textSlice';
import themeColorReducer from '@/app/redux/features/themeColorSlice';
import textColorReducer from '@/app/redux/features/textColorSlice';
import authReducer from '@/app/redux/features/authSlice';

export const store = configureStore({
  reducer: {
    text: textReducer,
    themeColor: themeColorReducer,
    textColor: textColorReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
