import {
  SerializedError,
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit';
import { QuotableApiService } from '@api/qoutable/quotable-api.service';
import { countQuoteUniqueLetters, removeNonLetters } from '@utils/quote.utils';

type QuoteStateStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';

interface QuoteState {
  quote: {
    id: string;
    length: number;
    uniqueCharacters: number;
    content: string;
    contentWithoutSpecialChars: string;
  };
  status: QuoteStateStatus;
  error?: SerializedError;
}

const initialState: QuoteState = {
  quote: {
    id: '',
    length: 0,
    uniqueCharacters: 0,
    content: '',
    contentWithoutSpecialChars: ''
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
      const content = action.payload.content.toUpperCase();
      const contentWithoutSpecialChars = removeNonLetters(content);

      state.status = 'fulfilled';
      state.quote = {
        id: action.payload._id,
        length: action.payload.length,
        uniqueCharacters: countQuoteUniqueLetters(content),
        content,
        contentWithoutSpecialChars
      };
    });
    builder.addCase(fetchQuote.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error;
    });
  }
});

export default quoteSlice.reducer;
