const { getItem } = require('@ranty/nbased/service/storage/dynamo')

const getClient = async dni => {
  const clientResp = await getItem({
    TableName: process.env.CLIENTS_TABLE,
    Key: {
      dni,
    },
  })
  return clientResp.Item
}

module.exports = {
  getClient
}