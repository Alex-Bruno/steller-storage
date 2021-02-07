import { createConnection } from 'typeorm'

import { ProductModel } from './entities/ProductModel'
import { CashierModel } from './entities/CashierModel'

export const getConnection = async () => {
  const connection = await createConnection({
    type: 'expo',
    database: 'storage.db',
    driver: require('expo-sqlite'),
    entities: [
      ProductModel
      // CashierModel
    ],
    synchronize: true,
    logging: true
  })

  return connection
}
