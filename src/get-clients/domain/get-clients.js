const { ValidateGetClientsInput } = require('../schema/input/get-clients')
const { getClients } = require('../service/get-clients')

module.exports = async (commandPayload, commandMeta) => {
  new ValidateGetClientsInput(commandPayload, commandMeta)

  const clients = await getClients()

  return {
    status: 200,
    body: clients,
  }
}
