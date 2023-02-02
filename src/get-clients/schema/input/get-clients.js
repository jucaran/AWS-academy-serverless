'use strict'

const { InputValidation } = require('@ranty/nbased/schema/inputValidation')

const inputSchema = {
  schema: {},
  settings: { strict: true },
}

class ValidateGetClientsInput extends InputValidation {
  constructor(payload, meta) {
    super({
      type: 'CREATE_CLIENT.INPUT',
      specversion: 'v1.0.0',
      source: meta.source,
      payload,
      inputSchema,
    })
  }
}

module.exports = { ValidateGetClientsInput }
