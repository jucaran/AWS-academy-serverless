const { getItem } = require('@ranty/nbased/service/storage/dynamo')

const getClient = async client => {
  const clientResp = await getItem({
    TableName: process.env.CLIENTS_TABLE,
    Key: {
      dni: client.dni,
    },
  })
  return clientResp.Item
}

module.exports = {
  getClient
}