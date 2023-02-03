const { updateItem } = require('@ranty/nbased/service/storage/dynamo')

async function deleteClient(dni) {
  await updateItem({
    TableName: process.env.CLIENTS_TABLE,
    Key: {
      dni,
    },
    UpdateExpression: 'SET active = :active',
    ExpressionAttributeValues: {
      ':active': false
    }
  })
}

module.exports = {
  deleteClient,
}
