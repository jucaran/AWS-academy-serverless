const { ValidateAssignCardInput } = require('../schema/input/assignCard')
const { getClient } = require('../service/getClient')
const { assignCard } = require('../service/assignCard')

module.exports = async (commandPayload, commandMeta) => {
  new ValidateAssignCardInput(commandPayload, commandMeta).get()

  const client = await getClient(commandPayload)

  if (client.card) {
    return {
      statusCode: 409,
      body: {
        message: 'El cliente ya tiene asignada una tarjeta'
      },
    }
  }

  await assignCard(client)

  return {
    status: 200,
    body: { message: 'Tarjeta asignada correctamente' },
  }
}
