'use strict'

const { InputValidation } = require('@ranty/nbased/schema/inputValidation')

const inputSchema = {
  schema: {
    dni: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    birthdate: { type: String, required: false },
  },
  settings: { strict: true },
}

class ValidateUpdateClientInput extends InputValidation {
  constructor(payload, meta) {
    super({
      type: 'UPDATE_CLIENT.INPUT',
      specversion: 'v1.0.0',
      source: meta.source,
      payload,
      inputSchema,
    })
  }
}

module.exports = { ValidateUpdateClientInput }
