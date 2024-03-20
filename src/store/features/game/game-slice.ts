import { createSlice } from '@reduxjs/toolkit';

interface GameState {
  errors: number;
  gameStart: number;
  gameEnd: number;
}

const initialState: GameState = {
  errors: 0,
  gameStart: 0,
  gameEnd: 0
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    incrementNumberOfMisses(state) {
      state.errors += 1;
    },
    setGameStart(state, action) {
      state.gameStart = action.payload;
    },
    setGameEnd(state, action) {
      state.gameEnd = action.payload;
    }
  }
});

export const { incrementNumberOfMisses, setGameStart, setGameEnd } =
  gameSlice.actions;
export default gameSlice.reducer;
