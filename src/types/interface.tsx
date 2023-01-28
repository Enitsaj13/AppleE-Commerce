
export interface Props {
    name: string
    age: number
}


export interface InputTypes {
    value?: string
    onChangeText?: ((text: string) => void | undefined) | undefined
    placeholder: string
    secureTextEntry: any
    keyboardType?: any
    onFocus?: ({ nativeEvent }: any) => void
    autoCorrect?: boolean
    id?: any
    autoCapitalize?: string
    placeholderTextColor?: string

}

