const { updateItem } = require('@ranty/nbased/service/storage/dynamo')
const { getGift } = require('../helper/getGift')

const assignGift = async client => {
  await updateItem({
    TableName: process.env.CLIENTS_TABLE,
    Key: {
      dni: client.dni,
    },
    UpdateExpression: 'SET gift = :gift',
    ExpressionAttributeValues: {
      ':gift': getGift(client.birthdate),
    },
  })
}

module.exports = {
  assignGift,
}
