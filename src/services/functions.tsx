import { Appearance } from 'react-native-appearance'

import LogoImage from '../assets/images/logo-blue.png'
import LogoWhite from '../assets/images/logo-white.png'

export function priceFormat(value: string) {
  if (!value) {
    return '00,00'
  }

  value = value.replace(',', '')
  value = value.replace('.', '')

  const length = value.length
  let cents = formatValueMoney(Number(value.substring(length - 2, length)).toString())
  let money = formatValueMoney(Number(value.substring(0, length - 2)).toString())

  return `${money},${cents}`
}

function formatValueMoney(value) {
  if (value.length === 0) {
    value = '00'
  }

  if (value.length === 1) {
    value = `0${value}`
  }
  return value
}

export function convertFloatToMoney(value: number) {
  const array = value.toString().split('.')

  let money = array[0]
  let cents = array[1]
  if(!cents) {
    cents = '00'
  }

  if(!money) {
    money = '00'
  }

  if(cents.length == 1) {
    cents = `${cents}0`
  }
  
  if(money.length == 1) {
    money = `${money}0`
  }

  return `${money},${cents}`
}

export function convertStringToFloat(value: string) {
  value = value.replace('.', '')
  value = value.replace(',', '.')

  return parseFloat(value)
}

export function getColorScheme() {
  return Appearance.getColorScheme()
}

export function getLogo() {
  const colorSchema = Appearance.getColorScheme()

  return colorSchema === 'dark' ? LogoImage : LogoWhite
}