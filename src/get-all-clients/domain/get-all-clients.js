const { ValidateGetClientsInput } = require('../schema/input/get-all-clients')
const { getClients } = require('../service/get-all-clients')
const { getClient } = require('../service/get-client')

module.exports = async (payload, metadata) => {
  new ValidateGetClientsInput(payload, metadata)

  if (payload.dni) {
    const client = await getClient(payload.dni)
    if (!client) {
      return {
        status: 404,
        body: { message: 'Client not found' }
      }
    }
    return {
      status: 200,
      body: await getClient(payload.dni),
    }
  }
  

  return {
    status: 200,
    body: await getClients(),
  }
}
