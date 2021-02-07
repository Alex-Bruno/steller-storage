import React, { useState } from 'react'
import { Card, Text } from 'react-native-ui-lib'
import { Dimensions } from 'react-native'

import { convertFloatToMoney, getLogo } from '../services/functions'
import { Image, ContainerItem, ContainerImage } from '../assets/styles/productStyle'
import { EditButton } from '../components/Buttons'
import { ModalProduct } from './Modal'

const RenderProduct = ({ item, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)

  const value = convertFloatToMoney(item.price)

  return (
    <Card
      elevation={3}
      height={100}
      width={Dimensions.get('window').width - 10}
      enableShadow
      row
      style={{ marginBottom: 8 }}
    >
      <ContainerImage onPress={() => {
        setModalVisible(true)
      }}
      >
        <Image source={(item.image && item.type) ? { uri: item.image } : getLogo()} />
      </ContainerImage>
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
      <ModalProduct item={item} isVisible={modalVisible} setModalVisible={setModalVisible} navigation={navigation} />
    </Card>
  )
}

export default RenderProduct
