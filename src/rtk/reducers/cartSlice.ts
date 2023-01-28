import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    ...item,
                    quantity: 1
                });
            }
        },
        increment: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            }
        },
        decrement: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity -= 1;
            }
        },
        removeFromCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                state.items = state.items.filter((i) => i.id !== item.id);
            }
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const { addToCart, increment, decrement, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;


