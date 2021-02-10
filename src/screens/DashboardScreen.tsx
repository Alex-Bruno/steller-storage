import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'

import { RootStackParamList } from '../types'
import OptionItem from '../components/OptionItem'
import { Container } from '../assets/styles/appStyle'

export default function DashboardScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <Container>
      <OptionItem
        title='Formas de pagamento'
        icon='money-bill-wave-alt'
        onPress={() => navigation.navigate('payment-type')}
        color='#FF341C'
        colorIcon=''
      />
      <OptionItem
        title='Caixas'
        icon='cash-register'
        onPress={() => navigation.navigate('cashier')}
        color='#7654E6'
        colorIcon=''
      />
      <OptionItem
        title='Comandas'
        icon='clipboard-list'
        onPress={() => navigation.navigate('product')}
        color='#3AFCD2'
        colorIcon=''
      />
      <OptionItem
        title='Compras'
        icon='box'
        onPress={() => navigation.navigate('product')}
        color='#C3E629'
        colorIcon=''
      />
      <OptionItem
        title='Produtos'
        icon='cubes'
        onPress={() => navigation.navigate('product')}
        color='#FE992E'
        colorIcon=''
      />
    </Container>
  );
}
