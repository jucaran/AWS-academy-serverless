'use strict'

const { InputValidation } = require('@ranty/nbased/schema/inputValidation')

const inputSchema = {
  schema: {
    client: { type: String, required: true },
    products: {
      type: [
        {
          name: String,
          price: Number,
        },
      ],
      required: true,
    },
  },
  settings: { strict: true },
}

class ValidateCreatePurchaseInput extends InputValidation {
  constructor(payload, meta) {
    super({
      type: 'CREATE_PURCHASE.INPUT',
      specversion: 'v1.0.0',
      source: meta.source,
      payload,
      inputSchema,
    })
  }
}

module.exports = { ValidateCreatePurchaseInput }
