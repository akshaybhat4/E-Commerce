import {createSlice} from "@reduxjs/toolkit";

const  initialState = {
    arr : [],
    products : [],
    order : [],
    quantity : 0,
    total : 0,
    OriginalPrice : 0,
    Discout : 0,
    Delivery : "",
    Sum : 0
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers:{
        addProduct:(state, action) => {
            let Val = [true];
            Val = state.products.map((product)=>product._id!==action.payload._id);
            let var1 = arr => arr.every(v => v === true);
            if(var1(Val)){
            state.products.push(action.payload);
            state.quantity = state.products.length;
            state.OriginalPrice += action.payload.basePrice * action.payload.quantity;
            state.total += action.payload.price * action.payload.quantity;
            state.Discout = state.OriginalPrice - state.total;
            state.Delivery = state.OriginalPrice - state.Discout > 500 ? "FREE" : "₹40";
            state.Sum = state.OriginalPrice - state.Discout > 500 ? state.total : state.total+40;}
        },
        removeProduct:(state, action)=>{
            state.quantity = state.quantity > 0 ? state.quantity-1 : 0;
            state.Date = state.quantity === 0 ? null : state.Date;
            const newProducts = state.products.filter((product) => product._id !== action.payload._id);
            state.products = newProducts;
            state.OriginalPrice -= action.payload.basePrice * action.payload.quantity;
            state.total -= action.payload.price * action.payload.quantity;
            state.Discout = state.OriginalPrice - state.total;
            state.Delivery = (state.OriginalPrice - state.Discout > 500) ? "FREE" : "₹40";
            state.Sum = state.OriginalPrice - state.Discout > 500 ? state.total : state.total+40;
        },
        palceOrders:(state, action) => {
            state.quantity= 0;
            state.OriginalPrice = 0;
            state.Delivery = "";
            state.total = 0;
            state.Discout = 0;
            state.Sum = 0;
            state.order = state.order.concat([...state.products]);
            state.products.splice(0,action.payload);
        }
    },
});

export const {addProduct, removeProduct, palceOrders} = cartSlice.actions;
export default cartSlice.reducer;
