const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      // you cannot print the value of state normally
      // you have to use current(state) , current comes from @reduxjs/toolkit
      // earlier redux used to say dont mutate the state , return a new updated state

      // now  rtk says you have to mutate the state
      // behind the scene react doesnt mujtate the state it returns a new state
      // either mutate the state or return empty object ({items: []})
      state.items.length == 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
