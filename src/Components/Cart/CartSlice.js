import { createSlice } from '@reduxjs/toolkit';

const calculateSubtotal = (item) => {
  return item.current_price[0]?.NGN[0] * item.quantity;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const { id, name, photos, description, current_price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ id, name, photos, description, current_price, quantity: 1 });
      }
      state.total += current_price[0]?.NGN[0];
    },
    decreaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity--;
        if (existingItem.quantity < 1) {
          state.items = state.items.filter((item) => item.id !== id);
        }
        state.total -= existingItem.current_price[0]?.NGN[0];
      }
    },
    increaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
        state.total += existingItem.current_price[0]?.NGN[0];
      }
    },
    removeItemFromCart: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state.total -= calculateSubtotal(state.items[itemIndex]);
        state.items.splice(itemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },

    saveFormData: (state, action) => {
      state.formData = action.payload; // Add this reducer
    },
  },




});

export const {
  addItemToCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  clearCart,
  saveFormData,
  removeItemFromCart,
} = cartSlice.actions;



export default cartSlice.reducer;
