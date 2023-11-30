import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { phoneBookSlice } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookSlice.reducer,
    filter: filterSlice.reducer,
  },
});
