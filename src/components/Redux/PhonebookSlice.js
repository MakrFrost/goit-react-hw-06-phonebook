import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Eden Clements', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Rosie Aniston', number: '645-17-79' },
      { id: 'id-4', name: 'Homer Simpson', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addItemContact(state, action) {
      state.items.push(action.payload);
    },
    removeItemContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    filteredContact(state, action) {
      state.filter = action.payload;
    },
  },
});

console.log(phonebookSlice);

export const { addItemContact, removeItemContact, filteredContact } =
  phonebookSlice.actions;
// export default phonebookSlice.reducer
