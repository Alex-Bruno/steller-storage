import React from 'react'
import {
  StyleSheet,
  Image
} from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'

import { getLogo } from '../services/functions'
import { Container, Logo } from '../assets/styles/sideBarStyle'

const CustomSidebarMenu = (props) => {
  return (
    <Container>
      <Logo
        source={getLogo()}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList style={{ color: '#FFF' }} {...props} />
      </DrawerContentScrollView>
    </Container>
  )
}

export default CustomSidebarMenu
