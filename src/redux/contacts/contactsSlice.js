import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './operations';

const contactInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const onPending = state => {
  state.isLoading = true;
  state.error = null;
};

const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const arrOfActs = [addContacts, deleteContacts, fetchContacts];

const addStatusToActs = status => arrOfActs.map(el => el[status]);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
        state.error = null;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, payload];
        state.error = null;
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
        state.error = null;
      })
      .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
      .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected);
  },
});

// export const getPhoneBookValue = state => state.phoneBook.contacts;
// export const getIsLoading = state => state.phoneBook.isLoading;
// export const getError = state => state.phoneBook.error;
