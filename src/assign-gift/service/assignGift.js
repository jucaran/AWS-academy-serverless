const { updateItem } = require('@ranty/nbased/service/storage/dynamo')
const { getGift } = require('../helper/getGift')

const assignCard = async client => {
  await updateItem({
    TableName: process.env.CLIENTS_TABLE,
    Key: {
      dni: client.dni,
    },
    UpdateExpression: 'SET gift = :gift',
    ExpressionAttributeValues: {
      ':card': getGift(client.birthdate),
    },
  })
}

module.exports = {
  assignCard,
}
