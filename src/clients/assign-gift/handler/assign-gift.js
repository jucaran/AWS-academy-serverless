const { batchEventMapper } = require('@ranty/nbased/handler')
const inputMode = require('@ranty/nbased/handler/input/batchEventQueue')
const outputMode = require('@ranty/nbased/handler/output/batchEventConfirmation')
const assignGiftDomain = require('../domain/assign-gift')

module.exports.handler = async (events, context) => {
  return batchEventMapper({ events, context }, inputMode, assignGiftDomain, outputMode)
}
