import { NavigationContainer } from '@react-navigation/native'
import React, { FC } from 'react'
import { LogBox } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Feed } from './screens'

if (__DEV__) {
  import('../ReactotronConfig')
    .then(() => {
      console.log('Reactotron Configured')
    })
    .catch(() => console.error)
}

LogBox.ignoreAllLogs(true)

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Feed />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default App
