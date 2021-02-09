import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { RootStackParamList } from '../types'
import OptionItem from '../components/OptionItem'

export default function DashboardScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={styles.container}>
      <OptionItem title='Formas de pagamento' icon='money-bill-wave-alt' navigation={navigation} onPress={() => navigation.navigate('payment-type')} />
      <OptionItem title='Caixas' icon='cash-register' navigation={navigation} onPress={() => navigation.navigate('cashier')} />
      <OptionItem title='Compras' icon='shopping-basket' navigation={navigation} onPress={() => navigation.navigate('product')} />
      <OptionItem title='Nova compra' icon='cart-plus' navigation={navigation} onPress={() => navigation.navigate('product')} />
      <OptionItem title='Produtos' icon='gifts' navigation={navigation} onPress={() => navigation.navigate('product')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
