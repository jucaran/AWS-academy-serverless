const { ValidateAddPointsInput } = require('../schema/input/add-points')
const { addPoints } = require('../service/add-points')

module.exports = async (rawPayload, metadata) => {
  const payload = JSON.parse(rawPayload.Message)
  const purchase = new ValidateAddPointsInput(payload, metadata).get()

  await addPoints(purchase)

  return {
    status: 200,
    body: { message: 'Puntos agregados correctamente' },
  }
}
