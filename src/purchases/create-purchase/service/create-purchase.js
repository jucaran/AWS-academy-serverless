const { putItem } = require('@ranty/nbased/service/storage/dynamo')
const { randomUUID } = require('crypto')

async function createPurchase(purchase) {
  const id = randomUUID()
  await putItem({
    TableName: process.env.PURCHASES_TABLE,
    Item: { ...purchase, id },
  })
  return id
}

module.exports = {
  createPurchase,
}
