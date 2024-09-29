import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import favoriteSlice from "./slice/favouriteSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorite: favoriteSlice,
  },
});
