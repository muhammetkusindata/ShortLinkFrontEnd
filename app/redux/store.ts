import { configureStore } from '@reduxjs/toolkit';
import textReducer from '@/app/redux/features/textSlice';
import templateColorReducer from '@/app/redux/features/templateColorSlice';
export const store = configureStore({
  reducer: {
    text: textReducer,
    templateColor: templateColorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
