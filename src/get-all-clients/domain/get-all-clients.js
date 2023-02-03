const { ValidateGetClientsInput } = require('../schema/input/get-all-clients')
const { getClients } = require('../service/get-all-clients')

module.exports = async (payload, metadata) => {
  new ValidateGetClientsInput(payload, metadata)

  return {
    status: 200,
    body: await getClients(),
  }
}
