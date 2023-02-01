const { ValidateCreateClientInput } = require('../schema/input/createClient.input')
const { ClientCreated } = require('../schema/event/clientCreated.event')
const { createClient } = require('../service/createClient')
const { publishNewClient } = require('../service/publishClientCreated')
const { calculateAge } = require('../helper/calcAge')

module.exports = async (commandPayload, commandMeta) => {
  const client = new ValidateCreateClientInput(commandPayload, commandMeta).get()

  const age = calculateAge(commandPayload.birth)
  if (age < 18 || age > 65) {
    return {
      statusCode: 400,
      body: {
        message: 'Client must be between 18 and 65 years old' 
      },
    }
  }

  console.log('SAVING ON DYNAMO')
  await createClient(client)

  console.log('SENDING TO SNS')
  const clientCreatedEvent = new ClientCreated(commandPayload, commandMeta)
  await publishNewClient(clientCreatedEvent)

  console.log('SENDING RESPONSE')
  return {
    status: 200,
    body: { message: 'Usuario creado correctamente' },
  }
}
