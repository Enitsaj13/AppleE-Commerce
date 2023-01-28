import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from '@src/rtk/reducers/hook'

const cartItemReducer = (state = [], action: any) => {

    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]

        case REMOVE_FROM_CART:
            return state.filter(cartItem => cartItem !== action.payload)

        case CLEAR_CART:
            return state = []
    }
    return state
}

export default cartItemReducer