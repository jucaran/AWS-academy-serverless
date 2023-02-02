const { batchEventMapper } = require('@ranty/nbased/handler');
const inputMode = require('@ranty/nbased/handler/input/batchEventQueue');
const outputMode = require('@ranty/nbased/handler/output/batchEventConfirmation');
const assignCardDomain = require('../domain/assignCard');

module.exports.handler = async (command, context) => {
  console.log("RECEIVED: ", { command, context })
  return batchEventMapper({ command, context }, inputMode, assignCardDomain, outputMode);
};
