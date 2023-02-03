'use strict'

const { InputValidation } = require('@ranty/nbased/schema/inputValidation')

const inputSchema = {
  schema: {
    dni: { type: String, required: true },
  },
  settings: { strict: true },
}

class ValidateDeleteClientInput extends InputValidation {
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

module.exports = { ValidateDeleteClientInput }
