const { getItem } = require('@ranty/nbased/service/storage/dynamo')

const getClient = async dni => {
  const result = await getItem({
    TableName: process.env.CLIENTS_TABLE,
    Key: {
      dni
    },
    FilterExpression: '#active = :active',
    ExpressionAttributeNames: {
      '#active': 'active',
    },
    ExpressionAttributeValues: {
      ':active': true,
    },
  })

  return result.Item
}

module.exports = {
  getClient
}