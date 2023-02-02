const { publish } = require('@ranty/nbased/service/downstream/sns')

const publishNewClient = async (clientEvent) => {
  const { eventPayload, eventMeta } = clientEvent.get()

  await publish({
    Message: eventPayload,
    TopicArn: process.env.CLIENT_TOPIC
  }, eventMeta)
}

module.exports = {
  publishNewClient,
}

