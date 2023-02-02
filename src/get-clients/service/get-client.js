const { getItem } = require('@ranty/nbased/service/storage/dynamo')

const getClient = async dni => {
  const result = await getItem({
    TableName: process.env.CLIENTS_TABLE,
    Key: {
      dni
    },
  })

  return result.Item
}

module.exports = {
  getClient
}