import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  user: { email: string };
};

const initialState = {
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },

  },
});

export const { setEmail } = userSlice.actions;
export default userSlice.reducer;