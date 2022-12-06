import { configureStore } from '@reduxjs/toolkit';
import { persistedReducers } from './PhonebookSlice';

export const store = configureStore({
  reducer: { contacts: persistedReducers },
});
