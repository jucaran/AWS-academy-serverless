const { ValidateCreateClientInput } = require('../schema/createClientInput')
const { createClient } = require('../service/createClient')
const { publishNewClient } = require('../service/publishClientCreated')

module.exports = async (commandPayload, commandMeta) => {
  new ValidateCreateClientInput(commandPayload, commandMeta)

  await createClient(commandPayload)
  await publishNewClient(commandPayload)

  return {
    status: 200,
    body: JSON.stringify('Usuario creado correctamente'),
  }
}
