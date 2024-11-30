import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({ // returns an object to the cartSlice
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => { // modify state based on teh action
            // state mutation
            // ! bts
            // ! redux creates an immutable state of the input state
            // ! it creates a new state and shifts the previous one with changes into the new one
            // ! redux-toolkit uses immer to separate the states
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop(); // remove one item
        },
        clearCart: (state, action) => {
            state.items.length = 0; // makes array empty again OR use return {items: []}
            // state = [] is change in local variable, original state variable is not changed
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions; // export actions
export default cartSlice.reducer;