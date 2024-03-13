import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  name: string;
}

const initialState: UserState = {
  name: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set(state, action) {
      state.name = action.payload;
    }
  }
});

export const { set } = userSlice.actions;
export default userSlice.reducer;
