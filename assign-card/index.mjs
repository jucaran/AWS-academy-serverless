import { getClient, saveClientCard } from './data.mjs'
import { getClientType } from './utils.mjs'

export const handler = async event => {
  const clients = event.Records.map(record => JSON.parse(record.body))

  for (let client of clients) {
    try {
      const dbClient = await getClient(client)
      if (dbClient.card) {
        return {
          statusCode: 409,
          body: JSON.stringify('El cliente ya tiene una tarjeta asignada'),
        }
      }
    } catch (error) {
      console.log('error: ', error)
      return {
        statusCode: 500,
        body: JSON.stringify('Error al traer datos de cliente'),
      }
    }

    try {
      await saveClientCard(client, getClientType(client.birthdate))
    } catch (error) {
      console.log('error: ', error)
      return {
        statusCode: 500,
        body: JSON.stringify('Hubo un problema al asignar tarjeta'),
      }
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify('Tarjeta asignada correctamente'),
  }
}
