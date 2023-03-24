import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import OrderService from "../../services/OrderService";
export const createOrderAction = createAsyncThunk("create-order", async (orderRequest) => {
  const orderResponse = OrderService.createOrder(orderRequest);
  return (await orderResponse).data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalCartAmount: 0,
    isLoadingCreateOrder: false,
    dataCreateOrder: null,
    isErrorCreateOrder: false
  },
  reducers: {
    clear: (state) => {
      state.cartItems = [];
    },
    add: (state, action) => {
      const product = action.payload;
      //check item is already exits
      const existsItem = state.cartItems.find((item) => item.id === product.productId);
      if (existsItem && existsItem.weight === product.weight) {
        existsItem.quantity++;
        existsItem.totalPrice += product.productPrice;
        state.totalQuantity++;
        state.totalCartAmount += product.productPrice;
      } else {
        const qty = product.orderQty;
        state.cartItems.push({
          id: product.productId,
          img: product.productImageUrl,
          price: product.productPrice,
          quantity: product.orderQty,
          weight: product.weight,
          totalPrice: product.productPrice * qty,
          name: product.productName,
          category: product.categoryName,
        });
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
  extraReducers: (builder) => {
    builder.addCase(createOrderAction.pending, (state, action) => {
      state.isLoadingCreateOrder = true;
    });

    builder.addCase(createOrderAction.fulfilled, (state, action) => {
      state.isLoadingCreateOrder = false;
      state.dataCreateOrder = action.payload;
    });

    builder.addCase(createOrderAction.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isErrorCreateOrder = true;
    });
  }
});

export const { clear, add, remove, increase, decrease, delItem } = cartSlice.actions;
export default cartSlice.reducer;
