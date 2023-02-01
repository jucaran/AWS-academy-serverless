// const { commandMapper } = require('@ranty/nbased/handler');
const { commandMapper } = require('ebased/handler')
const apiInputMode = require('ebased/handler/input/commandInvoke');
const apiOutputMode = require('ebased/handler/output/commandInvoke');
const createClientDomain = require('../domain/createClient');

module.exports.handler = async (command, context) => {
  return commandMapper({ command, context }, apiInputMode, createClientDomain, apiOutputMode);
};
