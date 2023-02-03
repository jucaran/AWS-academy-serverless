const { publish } = require('@ranty/nbased/service/downstream/sns')

const publishNewPurchase = async (purchaseEvent) => {
  const { eventPayload, eventMeta } = purchaseEvent.get()

  await publish({
    Message: eventPayload,
    TopicArn: process.env.PURCHASES_TOPIC
  }, eventMeta)
}

module.exports = {
  publishNewPurchase,
}

