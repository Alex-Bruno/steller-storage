import React from 'react'
import { ButtonGreen, ButtonRed, ButtonRedFixed, ButtonOrange, ButtonBlue, ButtonLargeGreen, ButtonLargeBlue, TextButton } from '../assets/styles/buttonStyle'
import { FontAwesome5 } from '@expo/vector-icons'

export function EnterButton ({ onPress }) {
  return (
    <ButtonGreen onPress={() => onPress()}>
      <FontAwesome5 name='chevron-right' size={20} color='white' />
    </ButtonGreen>
  )
}

export function EditButton ({ onPress }) {
  return (
    <ButtonGreen onPress={() => onPress()}>
      <FontAwesome5 name='pen' size={20} color='white' />
    </ButtonGreen>
  )
}

export function BackButton ({ onPress }) {
  return (
    <ButtonRed onPress={() => onPress()}>
      <FontAwesome5 name='chevron-left' size={20} color='white' />
    </ButtonRed>
  )
}

export function CloseButton ({ onPress }) {
  return (
    <ButtonRedFixed onPress={() => onPress()}>
      <FontAwesome5 name='times' size={20} color='white' />
    </ButtonRedFixed>
  )
}

export function AddButton ({ onPress }) {
  return (
    <ButtonRed onPress={() => onPress()}>
      <FontAwesome5 name='plus' size={20} color='white' />
    </ButtonRed>
  )
}

export function RefressButton ({ onPress }) {
  return (
    <ButtonOrange onPress={() => onPress()}>
      <FontAwesome5 name='sync-alt' size={20} color='white' />
    </ButtonOrange>
  )
}

export function NextPageButton ({ onPress, page }) {
  return (
    <ButtonBlue onPress={() => onPress()} left='135'>
      <TextButton>{page}</TextButton>
    </ButtonBlue>
  )
}

export function BeforePageButton ({ onPress, page }) {
  return (
    <ButtonBlue onPress={() => onPress()}>
      <TextButton>{page}</TextButton>
    </ButtonBlue>
  )
}

export function SaveButton ({ onPress }) {
  return (
    <ButtonLargeGreen onPress={() => onPress()}>
      <TextButton>
        <FontAwesome5 name='save' size={20} color='white' /> Salvar
      </TextButton>
    </ButtonLargeGreen>
  )
}

export function UploadButton ({ onPress }) {
  return (
    <ButtonLargeBlue onPress={() => onPress()}>
      <TextButton>
        <FontAwesome5 name='arrow-circle-up' size={20} color='white' /> Alterar Imagem
      </TextButton>
    </ButtonLargeBlue>
  )
}
