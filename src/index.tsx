import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'

import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'

import reducers from './reducers'
import Navigation from './navigation'


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const App: React.FC = (props) => {
  return (
    <Provider store={store}>
      <StatusBar style='auto' />
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation colorScheme={props.colorScheme} />
      </SafeAreaView>
    </Provider>
  );
};

export default App;