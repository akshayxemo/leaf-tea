import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the cart item
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Define the initial state
interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

// Create a slice of the Redux store for the cart
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to the cart
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        // If item already exists, update quantity
        existingItem.quantity += newItem.quantity;
      } else {
        // If item does not exist, add it to the cart
        state.cartItems.push(newItem);
      }
    },
    // Remove item from the cart
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    // Update quantity of an item in the cart
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }
    },
    // Clear the entire cart
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// Export actions and reducer
export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
