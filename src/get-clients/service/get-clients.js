const { scanTable } = require('@ranty/nbased/service/storage/dynamo')

async function getClients() {
  const result = await scanTable({
    TableName: process.env.CLIENTS_TABLE,
    ProjectionExpression: 'firstName, lastName, dni, birthdate'
  })

  return result.Items
}

module.exports = {
  getClients,
}
