const { scanTable } = require('@ranty/nbased/service/storage/dynamo')

async function getClients() {
  return await scanTable({
    TableName: process.env.CLIENTS_TABLE,
  })
}

module.exports = {
  getClients,
}
