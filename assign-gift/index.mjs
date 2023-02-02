import { getClient, saveClientGift } from './data.mjs'
import { getGift } from './utils.mjs'

export const handler = async event => {
  console.log("EVENT: ", event)
  const clients = event.Records.map(record => JSON.parse(record.body))

  for (let client of clients) {
    try {
      const dbClient = await getClient(client)
      if (dbClient.gift) {
        return {
          statusCode: 409,
          body: JSON.stringify('El usuario ya tiene un regalo asignado'),
        }
      }
    } catch (error) {
      console.log('error: ', error)
      return {
        statusCode: 500,
        body: JSON.stringify('Error al traer datos de cliente'),
      }
    }

    const clientGift = getGift(client.birthdate)

    try {
      await saveClientGift(client, clientGift)
    } catch (error) {
      console.log('error: ', error)
      return {
        statusCode: 500,
        body: JSON.stringify('Hubo un problema al asignar el regalo'),
      }
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify('Regalo asignado correctamente'),
  }
}
