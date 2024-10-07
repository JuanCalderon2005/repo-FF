import { configureStore } from '@reduxjs/toolkit';
import {persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createWrapper } from 'next-redux-wrapper';
import { cartSlice } from './slices/cartSlice';

export const createStore = () =>
  configureStore({
    reducer: {
      cart: cartSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, 
      }),
  });


export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<AppStore>(createStore);

export const store = createStore(); 
export const persistor = persistStore(store);
