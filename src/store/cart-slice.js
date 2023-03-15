import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        totalQuantity:0,
        showCart:false
    },
    reducers:{
        addToCart(state,action){
            const newItem = action.payload;

            // check if item exist or not

            const existingItem = state.cartItems.find((item)=> item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice+= newItem.price;
            }
            else{
                state.cartItems.push({
                    id: newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice : newItem.price,
                    name:newItem.name
                })
            }
            state.totalQuantity++;

        },
        removeFromCart(state,action){
            const deleteId = action.payload;
            const existingItem = state.cartItems.find((item)=> item.id === deleteId)
            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter((item)=> item.id !== deleteId)
            }
            else{
                existingItem.quantity--;
            }
        },
        setShowCart(state){
            state.showCart = !state.showCart;
        }
    }
})


export const cartActions = cartSlice.actions;

export default cartSlice;
