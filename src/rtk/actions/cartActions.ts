
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from '@src/rtk/reducers/hook'

export const addToCart = (payload: any) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const removeFromCart = (payload: any) => {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}




