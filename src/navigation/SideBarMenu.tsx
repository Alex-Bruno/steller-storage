import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Image
} from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'

import { getLogo } from '../services/functions'

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={getLogo()}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    marginTop: 50
  }
})

export default CustomSidebarMenu
