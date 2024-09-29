import { createSelector, createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favoritesItemList: [],
  },
  reducers: {
    addToFavorites(state, action) {
      const newItem = action.payload;

      const existingItemIndex = state.favoritesItemList.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        state.favoritesItemList[existingItemIndex].quantity++;
      } else {
        state.favoritesItemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
          cover: newItem.images,
        });
      }
    },

    removeFromFavorite(state, action) {
      const idToRemove = action.payload;

      state.favoritesItemList -
        state.favoritesItemList.filter((item) => item.id !== idToRemove);
    },

    clearFavorite(state) {
      state.favoritesItemList = [];
    },
  },
});

export const FavoriteActions = favoriteSlice.actions;
export const { clearFavorite } = favoriteSlice.actions;

export const selectTotalFavorite = createSelector(
  (state) => state.favorite.favoritesItemList,
  (favoritesItemList) => favoritesItemList.length
);

export default favoriteSlice.reducer;
