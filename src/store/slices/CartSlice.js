import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalCartAmount: 0,
  },
  reducers: {
    clear: (state) => {
      state.cartItems = [];
    },
    add: (state, action) => {
      const product = action.payload;

      console.log(product);
      //check item is already exits
      const existsItem = state.cartItems.find((item) => item.id === product.productId);
      console.log(existsItem);
      if (existsItem) {
        existsItem.quantity++;
        existsItem.totalPrice += product.productPrice;
        state.totalQuantity++;
        state.totalCartAmount += product.productPrice;
      } else {
        const qty = product.quantity;
        state.cartItems.push({
          id: product.productId,
          img: product.productImageUrl,
          price: product.productPrice,
          quantity: product.quantity,
          weight: product.weight,
          totalPrice: product.productPrice,
          name: product.productName,
          category: product.categoryName,
        });
        console.log(qty);
        state.totalQuantity += qty * 1;
        state.totalCartAmount += product.productPrice * qty;
      }
    },
    remove: (state, action) => {
      const id = action.payload;
      const exitstingItem = state.cartItems.find((item) => item.id === id);
      if (exitstingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity--;
        state.totalCartAmount -= exitstingItem.price;
      } else {
        exitstingItem.quantity--;
        state.totalQuantity--;
        exitstingItem.totalPrice -= exitstingItem.price;
        state.totalCartAmount -= exitstingItem.price;
      }
    },
    delItem: (state, action) => {
      const id = action.payload;
      const exitstingItem = state.cartItems.find((item) => item.id === id);
      if (exitstingItem.quantity >= 1) {
        const totalItemQty = exitstingItem.quantity;
        const totalItemPrice = exitstingItem.price;
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity -= totalItemQty;
        state.totalCartAmount -= totalItemPrice * totalItemQty;
      }
    },
    increase: (state, action) => {
      const id = action.payload;
      console.log(id);
      const existsItem = state.cartItems.find((item) => item.id === id);
      if (existsItem) {
        const totalItemQty = existsItem.quantity;
        existsItem.quantity++;
        const price = existsItem.totalPrice / totalItemQty;
        existsItem.totalPrice += price;
        state.totalQuantity++;
        state.totalCartAmount += price;
      }
    },
  },
});

export const { clear, add, remove, increase, decrease, delItem } = cartSlice.actions;
export default cartSlice.reducer;
