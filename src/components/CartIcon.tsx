import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import { connect } from 'react-redux'


import CartIcon from '@src/screens/Cart/CartIcon'

const CartContainer = ({ navigation, cartItems }: any) => {
    return (

        <TouchableOpacity activeOpacity={0.8}
            className='self-end p-2 top-4 right-2 border border-white rounded-lg' onPress={() => navigation.navigate('Cart')}>
            <Icon name='shoppingcart' size={25} />
            <CartIcon cartItems={cartItems} />
        </TouchableOpacity>
    )
}

const mapStateToProps = ({ cartItems }: any) => {
    return {
        cartItems: cartItems
    }
}

export default connect(mapStateToProps)(CartContainer)