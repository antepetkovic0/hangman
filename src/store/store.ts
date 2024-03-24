import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/user-slice';
import quoteReducer from './features/quote/quote-slice';
import gameReducer from './features/game/game-slice';
import scoreReducer from './features/score/score-slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    quote: quoteReducer,
    game: gameReducer,
    score: scoreReducer
  }
});

export type AppDispacth = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
