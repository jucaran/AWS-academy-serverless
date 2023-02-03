const { updateItem } = require('@ranty/nbased/service/storage/dynamo')
const { getPoints } = require('../helper/get-points')

const addPoints = async purchase => {
  await updateItem({
    TableName: process.env.CLIENTS_TABLE,
    Key: {
      dni: purchase.client,
    },
    UpdateExpression: 'SET points = points + :p',
    ExpressionAttributeValues: {
      ':p': getPoints(purchase.products),
    },
  })
}

module.exports = {
  addPoints,
}
