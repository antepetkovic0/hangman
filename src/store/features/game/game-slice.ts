import { createSlice } from '@reduxjs/toolkit';

type GameStatus = 'idle' | 'inprogress' | 'win' | 'lose';

interface GameState {
  status: GameStatus;
  errors: number;
  guesses: string[];
  gameStart: number;
  gameEnd: number;
}

const initialState: GameState = {
  status: 'idle',
  errors: 0,
  guesses: [],
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
    setGuesses(state, action) {
      state.guesses.push(action.payload);
    },
    setGameStart(state) {
      state = {
        ...initialState,
        status: 'inprogress',
        gameStart: new Date().getTime()
      };

      return state;
    },
    setGameEnd(state, action) {
      state.status = action.payload;
      state.gameEnd = new Date().getTime();
    }
  }
});

export const { incrementNumberOfMisses, setGuesses, setGameStart, setGameEnd } =
  gameSlice.actions;
export default gameSlice.reducer;
