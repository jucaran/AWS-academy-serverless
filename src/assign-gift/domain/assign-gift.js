const { ValidateAssignGiftInput } = require('../schema/input/assign-gift')
const { getClient } = require('../service/get-client')
const { assignGift } = require('../service/assign-gift')

module.exports = async (eventPayload, eventMeta) => {
  const payload = JSON.parse(eventPayload.Message)
  new ValidateAssignGiftInput(payload, eventMeta)

  const client = await getClient(payload)

  if (client.gift) {
    return {
      statusCode: 409,
      body: {
        message: 'El cliente ya tiene asignada un regalo',
      },
    }
  }

  await assignGift(client)

  return {
    status: 200,
    body: { message: 'Regalo asignada correctamente' },
  }
}
