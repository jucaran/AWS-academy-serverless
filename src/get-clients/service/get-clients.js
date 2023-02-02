const { scanTable } = require('@ranty/nbased/service/storage/dynamo')

async function getClients() {
  const clients = await scanTable({
    TableName: process.env.CLIENTS_TABLE,
  })

  return clients.Items.map(client => { 
    const type = client.card?.type
    delete client.card
    return {...client, type }
  })
}

module.exports = {
  getClients,
}
