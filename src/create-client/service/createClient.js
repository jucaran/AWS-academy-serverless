const { putItem } = require('ebased/service/storage/dynamo')

async function createClient(client) {
  await putItem({
    TableName: process.env.CLIENTS_TABLE,
    Item: {
      dni: { S: client.dni },
      firstName: { S: client.firstName },
      lastName: { S: client.lastName },
      birthdate: { S: client.birthdate },
    },
  })
}

module.exports = {
  createClient,
}
