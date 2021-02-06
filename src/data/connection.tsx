import { createConnection } from 'typeorm'

import { ProductModel } from './entities/ProductModel'

export const getConnection = async () => {
  const connection = await createConnection({
    type: 'expo',
    database: 'storage.db',
    driver: require('expo-sqlite'),
    entities: [
      ProductModel
    ],
    synchronize: true,
    logging: true
  })

  return connection
}
