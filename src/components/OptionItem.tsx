import React from 'react'
import { Card, Text } from 'react-native-ui-lib'
import { Dimensions } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

import { ContainerCenter, ContainerSmallCenter } from '../assets/styles/productStyle'
import { EnterButton } from '../components/Buttons'

const OptionItem = ({ title, icon, navigation, onPress }) => {
  return (
    <Card
      elevation={3}
      height={100}
      width={Dimensions.get('window').width - 10}
      enableShadow
      row
      style={{ flex: 1, margin: 10, padding: 10 }}
    >
      <ContainerCenter>
        <Text text80 uppercase style={{ marginTop: 15 }}>
          <FontAwesome5 name={icon} size={22} color='white' /> {title}
        </Text>
      </ContainerCenter>
      <ContainerSmallCenter>
        <EnterButton onPress={() => onPress()} />
      </ContainerSmallCenter>
    </Card>
  )
}

export default OptionItem
