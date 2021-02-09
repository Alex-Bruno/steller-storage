import { createConnection } from 'typeorm'

import { ProductModel } from './entities/ProductModel'
import { PaymentTypeModel } from './entities/PaymentTypeModel'
import { CashierModel } from './entities/CashierModel'
import { PurchaseModel } from './entities/PurchaseModel'

export const getConnection = async () => {
  const connection = await createConnection({
    type: 'expo',
    database: 'storage.db',
    driver: require('expo-sqlite'),
    entities: [
      ProductModel,
      PaymentTypeModel,
      CashierModel,
      PurchaseModel
    ],
    synchronize: true,
    logging: true
  })

  return connection
}
