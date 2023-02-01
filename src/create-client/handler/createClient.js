// const { commandMapper } = require('@ranty/nbased/handler');
const { commandMapper } = require('@ranty/nbased/handler');
const apiInputMode = require('@ranty/nbased/handler/input/commandInvoke');
const apiOutputMode = require('@ranty/nbased/handler/output/commandInvoke');
const createClientDomain = require('../domain/createClient');

module.exports.handler = async (command, context) => {
  return commandMapper({ command, context }, apiInputMode, createClientDomain, apiOutputMode);
};
