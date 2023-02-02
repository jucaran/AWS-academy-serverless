'use strict'

const { InputValidation } = require('@ranty/nbased/schema/inputValidation')

const inputSchema = {
  schema: {
    dni: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthdate: { type: String, required: true },
  },
  settings: { strict: true },
}

class ValidateAssignGiftInput extends InputValidation {
  constructor(payload, meta) {
    super({
      type: 'ASSIGN_CARD.INPUT',
      specversion: 'v1.0.0',
      source: meta.source,
      payload,
      inputSchema,
    })
  }
}

module.exports = { ValidateAssignGiftInput }