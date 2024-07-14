import { createSlice } from '@reduxjs/toolkit';

const calculateSubtotal = (item) => {
  return item.price * item.quantity;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const { id, name,  photos, description, current_price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ id, name,  photos, description, current_price, quantity: 1 });
      }
      state.total += current_price[0]?.NGN[0]; // Update total when adding an item
    },
    decreaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        state.total -= existingItem.price; // Update total when decreasing quantity
      }
    },
    increaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
        state.total += existingItem.price; // Update total when increasing quantity
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
  },
});

export const {
  addItemToCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  clearCart,
  removeItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
