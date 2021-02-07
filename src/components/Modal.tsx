import React from 'react'
import { Alert, Modal, View, StyleSheet } from 'react-native'

import { ModalView, ModalHeader, ModalContent, Image, Title, Text, TextLarge, TextMedium } from '../assets/styles/modalStyle'
import { convertFloatToMoney, getLogo } from '../services/functions'
import { CloseButton } from './Buttons'

export const ModalProduct = ({ item, isVisible, setModalVisible }) => {
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
          <CloseButton onPress={() => setModalVisible(false)} />
        </ModalHeader>
        <ModalContent>
          <Image source={(item.image && item.type) ? { uri: item.image } : getLogo()} />
          <TextLarge>R$ {value}</TextLarge>
          <TextMedium>Descrição</TextMedium>
          <Text>{item.description}</Text>
        </ModalContent>
      </ModalView>
    </Modal>
  )
}
