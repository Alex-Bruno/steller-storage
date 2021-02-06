import React from 'react'
import { View, Text } from 'react-native-ui-lib'

export function renderPrice (value) {
  const hasValue = Boolean(value && value.length > 0)
  return (
    <View row center>
      <Text text30 dark10={hasValue} dark60={!hasValue}>
        {hasValue ? value : '00'}
      </Text>
      <Text text80 dark60>
        R$
      </Text>
    </View>
  )
}
