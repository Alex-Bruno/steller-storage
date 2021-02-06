import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'
import LottieView from 'lottie-react-native'

import NotFoundScreen from '../screens/NotFoundScreen'
import { RootStackParamList } from '../types'
import TabNavigator from './TabNavigator'
import LinkingConfiguration from './LinkingConfiguration'
import { setConnection } from '../actions/ConnectionAction'
import { getConnection } from '../data/connection'

class Navigation extends React.Component {

  state = {
    loading: true,
  }

  setLoading = (loading: boolean) => {
    this.setState({ loading })
  }

  async componentDidMount() {
    if (!this.props.connection) {
      while (!this.props.connection) {
        const connection = await getConnection()
        this.props.setConnection(connection)
        this.setLoading(false)
      }
    }
  }

  render() {
    const { colorScheme } = this.props
    return (
      this.state.loading ? (
        <LottieView
          source={require('../assets/animations/loading-circle.json')}
          autoPlay
          loop
        />
      ) : (
          <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
          </NavigationContainer >
        )
    );
  }
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={TabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}


const mapStateToProps = state => ({
  connection: state.ConnectionReducer.connection,
})

export default connect(
  mapStateToProps,
  { setConnection },
)(Navigation)
