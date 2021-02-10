import React from 'react'
import { Modal } from 'react-native'

import { ModalView, ModalHeader, ModalContent, Image, Title, Text, TextLarge } from '../assets/styles/modalStyle'
import { convertFloatToMoney, getLogo } from '../services/functions'
import { CloseLargeButton, EditLargeButton } from './Buttons'

export const ModalProduct = ({ item, isVisible, setModalVisible, navigation }) => {
  const value = convertFloatToMoney(item.price)

  return (
    <Modal
      animationType='slide'
      transparent
      visible={isVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <ModalView>
        <ModalHeader>
          <Title>{item.name}</Title>
        </ModalHeader>
        <ModalContent>
          <Image source={(item.image && item.type) ? { uri: item.image } : getLogo()} />
          <TextLarge>R$ {value}</TextLarge>
          <Text>{item.description}</Text>
          <EditLargeButton onPress={() => {
            setModalVisible(false)
            navigation.navigate('new', { id: item.id, title: `Editar Produto ${item.name}` })
          }}
          />
          <CloseLargeButton onPress={() => setModalVisible(false)} />
        </ModalContent>
      </ModalView>
    </Modal>
  )
}
