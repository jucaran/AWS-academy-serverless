const { updateItem } = require('@ranty/nbased/service/storage/dynamo')
const { getUpdateParams } = require('../helper/get-update-attributes')

async function updateClient(updated, old) {
  const { ExpressionAttributeValues, UpdateExpression } = getUpdateParams(updated, old)
  await updateItem({
    TableName: process.env.CLIENTS_TABLE,
    Key: {
      dni: updated.dni,
    },
    UpdateExpression,
    ExpressionAttributeValues,
  })
}

module.exports = {
  updateClient,
}
