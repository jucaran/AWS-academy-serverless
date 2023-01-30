import { validateUser } from './validation.mjs'
import { saveUser } from './data.mjs'
import { publishNewClient } from './publish.mjs'

export const handler = async event => {
  try {
    validateUser(event)
  } catch (error) {
    console.log('error: ', error)
    return {
      statusCode: 400,
      body: JSON.stringify(error.message),
    }
  }

  try {
    await saveUser(event)
  } catch (error) {
    console.log('error: ', error)
    return {
      statusCode: 500,
      body: JSON.stringify('Hubo un problema al crear el usuario'),
    }
  }

  try {
    await publishNewClient(event)
  } catch (error) {
    console.log('error: ', error)
    return {
      statusCode: 500,
      body: JSON.stringify('Hubo un problema al crear publicar en el SNS'),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify('Usuario creado correctamente'),
  }
}
