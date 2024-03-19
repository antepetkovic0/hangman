import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/user-slice';
import quoteReducer from './features/quote/quote-slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    quote: quoteReducer
  }
});

export type AppDispacth = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
