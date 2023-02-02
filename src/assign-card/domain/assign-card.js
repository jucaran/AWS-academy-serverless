const { ValidateAssignCardInput } = require('../schema/input/assign-card')
const { getClient } = require('../service/get-client')
const { assignCard } = require('../service/assign-card')

module.exports = async (eventPayload, eventMeta) => {
  const payload = JSON.parse(eventPayload.Message)
  new ValidateAssignCardInput(payload, eventMeta)

  const client = await getClient(payload)

  if (client.card) {
    return {
      statusCode: 409,
      body: {
        message: 'El cliente ya tiene asignada una tarjeta',
      },
    }
  }

  await assignCard(client)

  return {
    status: 200,
    body: { message: 'Tarjeta asignada correctamente' },
  }
}
