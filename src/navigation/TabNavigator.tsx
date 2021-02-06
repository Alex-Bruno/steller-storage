import * as React from 'react'
import { View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import DashboardScreen from '../screens/DashboardScreen'
//
import ProductScreen from '../screens/product'
import ProductNewScreen from '../screens/product/new'
//
import SideBarMenu from './SideBarMenu'
import { RootStackParamList } from '../types'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function NavigationDrawerStructure({ navigationProps }: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const toggleDrawer = () => {
    navigationProps.toggleDrawer()
  }

  return (
    <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
      <FontAwesome5.Button name='bars' backgroundColor='transparent' color='#00F' onPress={toggleDrawer} />
    </View>
  )
}

function DashboardScreenStack({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <Stack.Navigator initialRouteName='index'>
      <Stack.Screen
        name='index'
        component={DashboardScreen}
      />
    </Stack.Navigator>
  )
}

function ProductScreenStack({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <Stack.Navigator initialRouteName='index'>
      <Stack.Screen
        name='index'
        component={ProductScreen}
        options={{
          title: 'Produtos',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerTintColor: '#FFF', // Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold' // Set Header text style
          }
        }}
      />
      <Stack.Screen
        name='new'
        component={ProductNewScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerTintColor: '#FFF', // Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold' // Set Header text style
          }
        })}
      />
    </Stack.Navigator>
  )
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 }
      }}
      drawerContent={(props) => <SideBarMenu {...props} />}
      initialRouteName='product'
    >

      <Drawer.Screen
        name='dashboard'
        component={DashboardScreenStack}
        options={{ drawerLabel: 'Dashboard' }}
      />

      <Drawer.Screen
        name='product'
        component={ProductScreenStack}
        options={{ drawerLabel: 'Produtos' }}
      />

    </Drawer.Navigator>
  )
}
