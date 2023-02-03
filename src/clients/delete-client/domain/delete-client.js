const { ValidateDeleteClientInput } = require('../schema/input/delete-client')
const { deleteClient } = require('../service/delete-client')
const { getClient } = require('../service/get-client')

module.exports = async (payload, metadata) => {
  new ValidateDeleteClientInput(payload, metadata)

  const client = await getClient(payload.dni)
  if (!client)
    return {
      status: 404,
      body: {
        message: 'No se ha encontrado el cliente',
      },
    }

  await deleteClient(payload.dni)

  return {
    status: 200,
    body: {
      message: 'Cliente eliminado correctamente',
    },
  }
}
