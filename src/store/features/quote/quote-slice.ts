import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { QuotableApiService } from '@api/qoutable/quotable-api.service';
import { countQuoteUniqueLetters } from '@utils/quote.utils';

interface QuoteState {
  quote: {
    id: string;
    length: number;
    uniqueCharacters: number;
    content: string;
  };
  isLoading: boolean;
  error?: string;
}

const initialState: QuoteState = {
  quote: {
    id: '',
    length: 0,
    uniqueCharacters: 0,
    content: ''
  },
  isLoading: false,
  error: ''
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
      state.isLoading = true;
    });
    builder.addCase(fetchQuote.fulfilled, (state, action) => {
      state.isLoading = false;
      state.quote = {
        id: action.payload._id,
        length: action.payload.length,
        uniqueCharacters: countQuoteUniqueLetters(action.payload.content),
        content: action.payload.content
      };
    });
    builder.addCase(fetchQuote.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  }
});

export default quoteSlice.reducer;
