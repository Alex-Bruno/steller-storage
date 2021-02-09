import React from 'react'
import { Card, Text } from 'react-native-ui-lib'
import { Dimensions } from 'react-native'

import { ContainerItem } from '../assets/styles/productStyle'
import { EditButton } from '../components/Buttons'
import { convertFloatToMoney, dateFormat } from '../services/functions'

const PaymentType = ({ item, navigation }) => {
  const value = convertFloatToMoney(item.valueTotal)

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
          {dateFormat(item.dateOpen)}
        </Text>
      </ContainerItem>
      <ContainerItem>
        <Text center text60 uppercase style={{ marginTop: 40, marginLeft: 10 }}>
          R$ {value}
        </Text>
      </ContainerItem>
      <ContainerItem>
        <EditButton onPress={() => navigation.navigate('new', { id: item.id, title: `Editar caixa ${item.dateOpen}` })} />
      </ContainerItem>
    </Card>
  )
}

export default PaymentType
