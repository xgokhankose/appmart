import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chatList: '',
};

const chatListSlice = createSlice({
  name: 'chatList',
  initialState,
  reducers: {
    setChatList: (state, action) => {
      state.chatList = action.payload;
    },
  },
});

export const { setChatList } = chatListSlice.actions;

export default chatListSlice.reducer;
