const { ValidateCreatePurchaseInput } = require('../schema/input/create-purchase')
const { PurchaseCreated } = require('../schema/event/purchase-created')
const { createPurchase } = require('../service/create-purchase')
const { getPurchaseWithDiscounts } = require('../helper/get-purchase-with-discounts')
const { getClient } = require('../service/get-client')
const { publishNewPurchase } = require('../service/publish-purchase-created')

module.exports = async (payload, metadata) => {
  const purchase = new ValidateCreatePurchaseInput(payload, metadata).get()

  const client = await getClient(payload.client)

  if (!client || !client.active)
    return {
      status: 404,
      body: { message: 'Cliente no encontrado' },
    }

  const purchaseWithDiscounts = getPurchaseWithDiscounts(purchase, client)

  const id = await createPurchase(purchaseWithDiscounts)

  const purchaseCreatedEvent = new PurchaseCreated({ ...purchaseWithDiscounts, id }, metadata)
  await publishNewPurchase(purchaseCreatedEvent)

  return {
    status: 200,
    body: { message: 'Compra creada correctamente' },
  }
}
