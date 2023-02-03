const { batchEventMapper } = require('@ranty/nbased/handler')
const inputMode = require('@ranty/nbased/handler/input/batchEventQueue')
const outputMode = require('@ranty/nbased/handler/output/batchEventConfirmation')
const assignCardDomain = require('../domain/assign-card')

module.exports.handler = async (events, context) => {
  return batchEventMapper({ events, context }, inputMode, assignCardDomain, outputMode)
}
