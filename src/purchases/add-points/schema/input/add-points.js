'use strict'

const { InputValidation } = require('@ranty/nbased/schema/inputValidation')

const inputSchema = {
  schema: {
    id: { type: String, required: true },
    client: { type: String, required: true },
    products: {
      type: [
        {
          name: String,
          price: Number,
          finalPrice: Number
        },
      ],
      required: true,
    },
  },
  settings: { strict: true },
}

class ValidateAddPointsInput extends InputValidation {
  constructor(payload, meta) {
    super({
      type: 'ADD_POINTS.INPUT',
      specversion: 'v1.0.0',
      source: meta.source,
      payload,
      inputSchema,
    })
  }
}

module.exports = { ValidateAddPointsInput }
