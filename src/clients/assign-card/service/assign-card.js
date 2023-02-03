const { updateItem } = require('@ranty/nbased/service/storage/dynamo')
const { getNewCard } = require('../helper/create-card')

const assignCard = async client => {
  await updateItem({
    TableName: process.env.CLIENTS_TABLE,
    Key: {
      dni: client.dni,
    },
    UpdateExpression: 'SET card = :card',
    ExpressionAttributeValues: {
      ':card': getNewCard(client.birthdate),
    },
  })
}

module.exports = {
  assignCard,
}
