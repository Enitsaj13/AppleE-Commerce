import { connect } from 'react-redux'
import { Text, TouchableHighlight } from 'react-native'


const FaveIcon = ({ faveItems }: any) => {
    return (
        <>
            {faveItems.length ? (
                <TouchableHighlight className='bg-red-500 rounded-full w-5 h-5 flex items-center justify-center absolute top-1 right-6 content-center'>
                    <Text className='text-white text-xs font-bold'>
                        {faveItems.length}
                    </Text>

                </TouchableHighlight>
            ) : null}
        </>
    )
}

const mapStateToProps = ({ faveItems }: any) => {
    return {
        faveItems: faveItems
    }
}

export default connect(mapStateToProps, null)(FaveIcon)