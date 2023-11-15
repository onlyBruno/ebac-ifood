import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  items: IDish[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IDish>) => {
      const dish = state.items.find((item) => item.id === action.payload.id);

      if (dish) {
        alert("Prato já adicionado!");
        return;
      }

      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { add, remove, open, close } = cartSlice.actions;

export default cartSlice.reducer;
