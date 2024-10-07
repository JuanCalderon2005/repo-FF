import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../types/productInterface';

interface CartState {
  items: IProduct[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<IProduct>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addProductToCart, removeProductFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;