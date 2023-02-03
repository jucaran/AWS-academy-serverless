const { putItem } = require('@ranty/nbased/service/storage/dynamo')
const { randomUUID } = require('crypto');


async function createPurchase(purchase) {
  await putItem({
    TableName: process.env.PURCHASES_TABLE,
    Item: { ...purchase, id: randomUUID() },
  })
}

module.exports = {
  createPurchase,
}
