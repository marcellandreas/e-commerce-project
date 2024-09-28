import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          cover: newItem.images,
        });
        state.totalQuantity++;
      }
    },

    removeToCart(state, action) {
      const id = action.payload;

      const existingItem = state.itemsList.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.totalQuantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    removeFromAllCart(state, action) {
      const id = action.payload;

      state.itemsList = state.itemsList.filter((item) => item.id !== id);
      state.totalQuantity -= state.itemsList.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },
  },
});

export const CartActions = cartSlice.actions;

export const selectTotalQuantity = createSelector(
  (state) => state.cart.itemsList,
  (itemsList) => itemsList.reduce((acc) => acc + 1, 0)
);
export const selectTotalPrice = createSelector(
  (state) => state.cart.itemsList,
  (itemsList) => itemsList.reduce((acc, item) => acc + item.totalPrice, 0)
);

export default cartSlice.reducer;
