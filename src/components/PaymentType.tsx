import React from 'react'
import { Card, Text } from 'react-native-ui-lib'
import { Dimensions } from 'react-native'

import { ContainerItem } from '../assets/styles/productStyle'
import { EditButton } from '../components/Buttons'

const PaymentType = ({ item, navigation }) => {
  return (
    <Card
      elevation={3}
      height={100}
      width={Dimensions.get('window').width - 10}
      enableShadow
      row
      style={{ marginBottom: 8 }}
    >
      <ContainerItem>
        <Text center text80 uppercase style={{ marginTop: 40, marginLeft: 10 }}>
          {item.name}
        </Text>
      </ContainerItem>
      <ContainerItem>
        <EditButton onPress={() => navigation.navigate('new', { id: item.id, title: `Editar forma de pagamento ${item.name}` })} />
      </ContainerItem>
    </Card>
  )
}

export default PaymentType
