const { updateItem } = require('@ranty/nbased/service/storage/dynamo')

async function updateClient(client) {
  const result = await updateItem({
    TableName: process.env.CLIENTS_TABLE,
    Key: {
      dni: client.dni,
    },
    UpdateExpression: 'SET firstName = :f, lastName = :l, dni = :d, birthdate = :b',
    ExpressionAttributeValues: {
      ':f': client.firstName,
      ':l': client.lastName,
      ':d': client.dni,
      ':b': client.birthdate,
    },
  })
  return result
}

module.exports = {
  updateClient,
}
