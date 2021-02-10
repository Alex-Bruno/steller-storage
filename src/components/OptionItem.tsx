import React from 'react'
import { Card, Text } from 'react-native-ui-lib'
import { Dimensions } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

import { ContainerCenter, ContainerSmallCenter } from '../assets/styles/productStyle'
import { EnterButton } from '../components/Buttons'
import { getColor } from '../services/functions'

const OptionItem = ({ title, color, icon, colorIcon, onPress }) => {
  return (
    <Card
      elevation={3}
      height={100}
      width={Dimensions.get('window').width - 10}
      row
      backgroundColor={getColor(color)}
      style={{ flex: 1, margin: 10, padding: 10, backgroundColor: getColor(color) }}
    >
      <ContainerCenter>
        <Text text70 uppercase style={{ marginTop: 15 }}>
          <FontAwesome5 name={icon} size={22} color={colorIcon || 'black'} /> {title}
        </Text>
      </ContainerCenter>
      <ContainerSmallCenter>
        <EnterButton onPress={() => onPress()} />
      </ContainerSmallCenter>
    </Card>
  )
}

export default OptionItem
