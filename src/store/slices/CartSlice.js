import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const placeOrder = createAsyncThunk('place-order', async (order) => {
    return null;
})
const initialState = {
    cartItems: [],
    totalQuantity: 0,
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducer: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        addToCart(state, action) {
            const product = action.payload;
            console.log(product);
            //check item is already exits
            const exitsItem = state.cartItems.find((item) => item.id === product.id)
            if (exitsItem) {
                exitsItem.quantity++
                exitsItem.totalPrice += product.price
            } else {
                state.itemsList.push({
                    id: product.productId,
                    price: product.productPrice,
                    quantity: 1,
                    totalPrice: product.productPrice,
                    name: product.productName,
                })
                state.totalQuantity++
            }
        },
        removeFromCart(state, action) {
            const id = action.payload
            const exitstingItem = state.itemsList.find((item) => item.id === id)
            if (exitstingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter((item) => item.id !== id)
                state.totalQuantity--
            } else {
                exitstingItem.quantity--
                exitstingItem.totalPrice -= exitstingItem.price
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(placeOrder.pending, (state, action) => {

        });

        builder.addCase(placeOrder.fulfilled, (state, action) => {
        });

        builder.addCase(placeOrder.rejected, (state, action) => {

        });
    }
})

export const { clearCart, addToCart, removeFromCart } =
    cartSlice.actions;
export default cartSlice.reducer;