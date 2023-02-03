const { ValidateUpdateClientInput } = require('../schema/input/update-client')
const { ClientUpdated } = require('../schema/event/client-updated')
const { updateClient } = require('../service/update-client')
const { publishClient } = require('../service/publish-client')
const { calculateAge } = require('../helper/calc-age')

module.exports = async (payload, metadata) => {
  console.log("PAYLOAD: ", payload)
  const client = new ValidateUpdateClientInput(payload, metadata).get()

  const age = calculateAge(payload.birth)
  if (age < 18 || age > 65) {
    return {
      statusCode: 400,
      body: {
        message: 'El cliente debe tener entre 18 y 65 años' 
      },
    }
  }

  const result = await updateClient(client)

  // const clientUpdatedEvent = new ClientUpdated(payload, metadata)
  // await publishClient(clientUpdatedEvent)

  return {
    status: 200,
    body: result,
  }
}
