import {
  SerializedError,
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit';
import { QuotableApiService } from '@api/qoutable/quotable-api.service';
import { countQuoteUniqueLetters } from '@utils/quote.utils';

type QuoteStateStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';

interface QuoteState {
  quote: {
    id: string;
    length: number;
    uniqueCharacters: number;
    content: string;
  };
  status: QuoteStateStatus;
  error?: SerializedError;
}

const initialState: QuoteState = {
  quote: {
    id: '',
    length: 0,
    uniqueCharacters: 0,
    content: ''
  },
  status: 'idle',
  error: undefined
};

export const fetchQuote = createAsyncThunk('quote/fetchQuote', async () => {
  const quotableApi = new QuotableApiService();
  const res = await quotableApi.getRandomQuoute();

  return res;
});

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuote.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(fetchQuote.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.quote = {
        id: action.payload._id,
        length: action.payload.length,
        uniqueCharacters: countQuoteUniqueLetters(action.payload.content),
        content: action.payload.content
      };
    });
    builder.addCase(fetchQuote.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error;
    });
  }
});

export default quoteSlice.reducer;
