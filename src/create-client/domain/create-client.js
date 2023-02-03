const { ValidateCreateClientInput } = require('../schema/input/create-client')
const { ClientCreated } = require('../schema/event/client-created')
const { createClient } = require('../service/create-client')
const { publishNewClient } = require('../service/publish-client-created')
const { calculateAge } = require('../helper/calc-age')

module.exports = async (commandPayload, commandMeta) => {
  const client = new ValidateCreateClientInput(commandPayload, commandMeta).get()

  const age = calculateAge(commandPayload.birthdate)
  if (age < 18 || age > 65) {
    return {
      status: 400,
      body: {
        message: 'El cliente debe tener entre 18 y 65 años' 
      },
    }
  }

  await createClient(client)

  const clientCreatedEvent = new ClientCreated(commandPayload, commandMeta)
  await publishNewClient(clientCreatedEvent)

  return {
    status: 200,
    body: { message: 'Usuario creado correctamente' },
  }
}
