const { ValidateUpdateClientInput } = require('../schema/input/update-client')
const { ClientUpdated } = require('../schema/event/client-updated')
const { updateClient } = require('../service/update-client')
const { getClient } = require('../service/get-client')
const { publishClient } = require('../service/publish-client')
const { calculateAge } = require('../helper/calc-age')
const { getDifferences } = require('../helper/compare')

module.exports = async (payload, metadata) => {
  const clientUpdated = new ValidateUpdateClientInput(payload, metadata).get()

  const oldClient = await getClient(payload.dni)
  if (!oldClient)
    return {
      status: 404,
      body: {
        message: 'No se ha encontrado el cliente',
      },
    }

  const age = calculateAge(payload.birthdate)
  if (age < 18 || age > 65)
    return {
      status: 400,
      body: {
        message: 'El cliente debe tener entre 18 y 65 años',
      },
    }
  
  if (!getDifferences(clientUpdated, oldClient)) return {
    status: 200,
    body: {
      message: 'Cliente sin cambios a actualizar',
    },
  }

  await updateClient(clientUpdated, oldClient)

  if (clientUpdated.birthdate !== oldClient.birthdate) {
    const clientUpdatedEvent = new ClientUpdated(payload, metadata)
    await publishClient(clientUpdatedEvent)
  }

  return {
    status: 200,
    body: {
      message: 'Cliente actualizado correctamente',
    },
  }
}
