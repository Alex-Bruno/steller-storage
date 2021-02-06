import * as Linking from 'expo-linking'

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Dashboard: {
            screens: {
              Index: 'index'
            }
          },
          Products: {
            screens: {
              Index: 'index'
            }
          }
        }
      },
      NotFound: '*'
    }
  }
}
