const { commandMapper } = require('@ranty/nbased/handler');
const apiInputMode = require('@ranty/nbased/handler/input/commandApi');
const apiOutputMode = require('@ranty/nbased/handler/output/commandApi');
const createPurchaseDomain = require('../domain/create-purchase');

module.exports.handler = async (command, context) => {
  return commandMapper({ command, context }, apiInputMode, createPurchaseDomain, apiOutputMode);
};
