import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "./favoritesSlice";
import reserveSlice from "./reserveSlice";

export default configureStore({
    reducer: {
      favorites: favoritesSlice,
      reserve: reserveSlice,
    },
  });