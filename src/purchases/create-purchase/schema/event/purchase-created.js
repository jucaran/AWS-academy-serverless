'use strict'

const { DownstreamEvent } = require('@ranty/nbased/schema/downstreamEvent')

const eventSchema = {
  schema: {
    id: { type: String, required: true },
    client: { type: String, required: true },
    products: {
      type: [
        {
          name: String,
          price: Number,
          finalPrice: Number,
        },
      ],
      required: true,
    },
  },
  settings: { strict: false },
}

class PurchaseCreated extends DownstreamEvent {
  constructor(payload, meta) {
    super({
      type: 'CREATE_PURCHASE.EVENT',
      specversion: 'v1.0.0',
      source: meta.source,
      meta,
      payload,
      eventSchema,
    })
  }
}

module.exports = { PurchaseCreated }
