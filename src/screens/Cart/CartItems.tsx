import { Text, View, TouchableOpacity, Image } from 'react-native'

import { increment, decrement } from '@src/rtk/reducers/cartSlice'

import { useDispatch } from 'react-redux'

const CartItem = ({ item }: any) => {

    // pass the item to the cart item //
    const data = item.item.product

    const dispatch = useDispatch()

    return (
        <>
            <View className='flex-row mt-5 bg-white py-1' key={Math.random()}>
                <View className='bg-slate-50 mx-4 rounded-lg p-4'>
                    <Image className='w-20 h-24'
                        resizeMode="contain"
                        source={{
                            uri: data.image ? data.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                        }} />
                </View>
                <View className='flex-col'>

                    {/* product name */}
                    <Text className='text-[18px] font-medium text-start mb-2'>
                        {data.name}
                    </Text>
                    <Text className='text-sm text-slate-600'>
                        Brand: {data.brand}
                    </Text>
                    <Text className='text-sm text-slate-600'>
                        Stock: {data.countInStock}
                    </Text>


                    {/* cart quantity */}
                    <View className='flex-1 flex-row mt-6'>
                        <TouchableOpacity
                            onPress={() => dispatch(decrement(data._id))}
                            className='bg-slate-50 rounded-full w-[30px] h-[30px] flex-row justify-center items-center'>
                            <Text className='text-sm text-slate-400 font-medium'>-</Text>
                        </TouchableOpacity>
                        <Text className='text-[14px] font-bold text-center mt-2 mx-3'>
                            1
                        </Text>
                        <TouchableOpacity
                            onPress={() => dispatch(increment(data._id))}
                            className='bg-slate-50 rounded-full w-[30px] h-[30px] flex-row justify-center items-center'>
                            <Text className='text-sm text-slate-900 font-medium'>+</Text>
                        </TouchableOpacity>

                        {/* price */}
                        <Text className='text-[16px] font-medium left-12 top-[5px]'>
                            ${data.price}
                        </Text>

                    </View>
                </View>
            </View>

            <View className='h-[1px] w-[90%] bg-slate-200 self-center mt-3' />
        </>

    )

}


const TotalPrice = ({ totalPrice }: any) => {
    return (
        <View className='flex-col justify-between h-10'>
            <View className='flex-row justify-between px-6'>
                <Text className='text-[16px] text-start text-slate-600'>
                    Subtotal
                </Text>
                <Text className='text-[16px] ml-2 text-slate-600'>
                    ₱{totalPrice}
                </Text>
            </View>

            <View className='flex-row justify-between px-6 mt-2'>
                <Text className='text-[16px] text-start text-slate-600'>
                    Shipping
                </Text>
                <Text className='text-[16px] text-start text-slate-600'>
                    Standard - Free
                </Text>
            </View>

            <View className='flex-row justify-between px-6 mt-2'>
                <Text className='text-[16px] font-medium text-start'>
                    Total
                </Text>
                <Text className='text-[16px] font-medium text-start'>
                    ₱{totalPrice}
                </Text>
            </View>
        </View>

    )
}

export { CartItem, TotalPrice }

export default CartItem


