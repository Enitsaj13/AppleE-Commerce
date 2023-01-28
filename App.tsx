import { NavigationContainer } from '@react-navigation/native'
import FocusedStatusBar from '@src/components/FocusedStatusBar'
import Toast from 'react-native-toast-message'

/* --- main navigator --- */
import RootNavigator from '@src/navigations/RootNavigator'

/* --- redux --- */
import { Provider } from 'react-redux'
import store from '@src/rtk/store'

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <FocusedStatusBar />
        <RootNavigator />
        <Toast />
      </NavigationContainer>
    </Provider>
  )
}

export default App


