import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './phoneBook/filterSlice';
import { phoneBookSlice } from './phoneBook/phoneBookSlice';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookSlice.reducer,
    filter: filterSlice.reducer,
  },
});
