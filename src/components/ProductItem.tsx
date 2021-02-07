import React from 'react'
import { Card, Text } from 'react-native-ui-lib'
import { Dimensions } from 'react-native'

import { ProductModel } from '../data/entities/ProductModel'
import { convertFloatToMoney, getLogo } from '../services/functions'
import { Image, ContainerItem } from '../assets/styles/productStyle'
import { EditButton } from '../components/Buttons'

export function renderProduct(item: ProductModel, navigation) {
  const value = convertFloatToMoney(item.price)

  return (
    <Card
      elevation={3}
      height={100}
      width={Dimensions.get('window').width - 10}
      enableShadow={true}
      row={true}
      style={{ marginBottom: 8 }}
    >
      <ContainerItem>
        <Image source={(item.image && item.type) ? { uri: item.image } : getLogo()} />
      </ContainerItem>
      <ContainerItem>
        <Text center text80 uppercase style={{ marginTop: 15 }}>
          {item.name}
        </Text>
        <Text center text60 dark60>
          R$ {value}
        </Text>
      </ContainerItem>
      <ContainerItem>
        <EditButton onPress={() => navigation.navigate('new', { id: item.id, title: `Editar Produto ${item.name}` })} />
      </ContainerItem>
    </Card>
  )
}
