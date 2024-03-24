import {
  SerializedError,
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit';
import { IngemarkApiService } from '@api/ingemark/ingemark-api.service';
import { calculateScore } from '@utils/score.utils';

type ScoreStateStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';

interface ScoreState {
  scores: { userName: string; score: number }[];
  status: ScoreStateStatus;
  error?: SerializedError;
}

const initialState: ScoreState = {
  scores: [],
  status: 'idle',
  error: undefined
};

export const fetchScores = createAsyncThunk('score/fetchScores', async () => {
  const ingemarkApi = new IngemarkApiService();
  const res = await ingemarkApi.getScores();
  console.log('res', res);
  return res;
});

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchScores.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(fetchScores.fulfilled, (state, action) => {
      const scores = action.payload
        .map((score) => {
          const { length, uniqueCharacters, errors, duration, userName } =
            score;

          return {
            userName,
            score: calculateScore(length, uniqueCharacters, errors, duration)
          };
        })
        .sort((a, b) => b.score - a.score);

      state.status = 'fulfilled';
      state.scores = scores;
    });
    builder.addCase(fetchScores.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error;
    });
  }
});

export default scoreSlice.reducer;
