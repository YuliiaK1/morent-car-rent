import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "./favoritesSlice";
import reserveSlice from "./reserveSlice";
import userSlice from "./userSlice";

export default configureStore({
    reducer: {
      favorites: favoritesSlice,
      reserve: reserveSlice,
      userSlice: userSlice,
    },
  });