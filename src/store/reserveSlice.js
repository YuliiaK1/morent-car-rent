import { createSlice } from "@reduxjs/toolkit";

const reserveSlice = createSlice ({
    name: 'reserve',
    initialState: {
        reserveList: {
            name: '',
            image: '',
            price: '',
          }
    },
    reducers: {
        addToReserve: (state, action) => {
            state.reserveList = action.payload;
        }
    }
})


export const { addToReserve } = reserveSlice.actions;
export default reserveSlice.reducer
