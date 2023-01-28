
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import cartItems from '@src/rtk/reducers/cartItem';
import faveItems from '@src/rtk/reducers/faveItem';

const reducers = combineReducers({
    cartItems: cartItems,
    faveItems: faveItems
})

export type RootState = ReturnType<typeof reducers>

const store = configureStore({
    reducer: reducers,
    devTools: true
})

export type AppDispatch = typeof store.dispatch

export default store;


