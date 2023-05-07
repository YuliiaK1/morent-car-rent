import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice ({
    name: 'favorites',
    initialState: {
        favoritesList: [],
    },
    reducers: {
        addToFavorites(state, action) {
            state.favoritesList.push(action.payload);
        },
        removeFromFavorites(state, action) {
            state.favoritesList = state.favoritesList.filter((favObj) => {
                return JSON.stringify(favObj) !== JSON.stringify(action.payload);
            });
        }
    }
})


export const { addToFavorites, removeFromFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer
