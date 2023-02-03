const { ValidateGetClientInput } = require('../schema/input/get-client')
const { getClient } = require('../service/get-client')

module.exports = async (payload, metadata) => {
  new ValidateGetClientsInput(payload, metadata)

  const client = await getClient(payload.dni)
  if (!client) {
    return {
      status: 404,
      body: { message: 'Client not found' },
    }
  }

  return {
    status: 200,
    body: await getClient(payload.dni),
  }
}
