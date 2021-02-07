import React from 'react'
import LottieView from 'lottie-react-native'

export function LoadingCircleBlue () {
  return (
    <LottieView
      source={require('../assets/animations/loading-circle.json')}
      colorFilters={
        [{
          keypath: 'button',
          color: '#F00000'
        }, {
          keypath: 'Sending Loader',
          color: '#F00000'
        }]
      }
      autoPlay
      loop
    />
  )
}

export function EmptyList () {
  return (
    <LottieView
      source={require('../assets/animations/empty.json')}
      colorFilters={
        [{
          keypath: 'button',
          color: '#F00000'
        }, {
          keypath: 'Sending Loader',
          color: '#F00000'
        }]
      }
      autoPlay
      loop
    />
  )
}
