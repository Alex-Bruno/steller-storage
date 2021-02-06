import 'reflect-metadata'
import React from 'react'
import { AppearanceProvider } from 'react-native-appearance'

import useCachedResources from './src/hooks/useCachedResources'
import useColorScheme from './src/hooks/useColorScheme'
import ContentApp from './src'

export default function App () {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  console.log('APP.TSX')
  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <AppearanceProvider>
        <ContentApp colorScheme={colorScheme} />
      </AppearanceProvider>
    )
  }
}
