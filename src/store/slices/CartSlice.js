import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
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
            const existsItem = state.cartItems.find((item) => item.id === product.productId)
            console.log(existsItem)
            if (existsItem) {
                existsItem.quantity++
                existsItem.totalPrice += product.productPrice
                state.totalQuantity++
                state.totalCartAmount += product.productPrice
            } else {
                state.cartItems.push({
                    id: product.productId,
                    img: product.productImageUrl,
                    price: product.productPrice,
                    quantity: 1,
                    weight: product.weight,
                    totalPrice: product.productPrice,
                    name: product.productName,
                    category: product.categoryName,
                })
                state.totalQuantity++
                state.totalCartAmount += product.productPrice
            }
        },
        remove: (state, action) => {
            const id = action.payload
            const exitstingItem = state.cartItems.find((item) => item.id === id)
            if (exitstingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id)
                state.totalQuantity--
                state.totalCartAmount -= exitstingItem.price
            } else {
                exitstingItem.quantity--
                state.totalQuantity--
                exitstingItem.totalPrice -= exitstingItem.price
                state.totalCartAmount -= exitstingItem.price
            }
        },
        increase: (state, action) => {
            const id = action.payload
            console.log(id)
            const existsItem = state.cartItems.find((item) => item.id === id);
            if (existsItem) {
                existsItem.quantity++
                existsItem.totalPrice += existsItem.totalPrice
                state.totalQuantity++
                state.totalCartAmount += existsItem.totalCartAmount
            }
        }
    }
})

export const { clear, add, remove, increase, decrease } =
    cartSlice.actions;
export default cartSlice.reducer;