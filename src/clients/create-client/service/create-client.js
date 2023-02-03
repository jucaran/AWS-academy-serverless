const { putItem } = require('@ranty/nbased/service/storage/dynamo')

async function createClient(client) {
  await putItem({
    TableName: process.env.CLIENTS_TABLE,
    Item: { ...client, active: true, points: 0 },
  })
}

module.exports = {
  createClient,
}
