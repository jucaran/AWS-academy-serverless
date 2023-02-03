const { publish } = require('@ranty/nbased/service/downstream/sns')

const publishClient = async (clientEvent) => {
  const { eventPayload, eventMeta } = clientEvent.get()

  await publish({
    Message: eventPayload,
    TopicArn: process.env.CLIENT_TOPIC
  }, eventMeta)
}

module.exports = {
  publishClient,
}

