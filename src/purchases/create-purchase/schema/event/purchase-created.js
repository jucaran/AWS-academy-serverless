'use strict'

const { DownstreamEvent } = require('@ranty/nbased/schema/downstreamEvent')

const eventSchema = {
  schema: {
    client: { type: String, required: true },
    products: [
      {
        name: String,
        price: Number,
      },
    ],
  },
  settings: { strict: false },
}

class PurchaseCreated extends DownstreamEvent {
  constructor(payload, meta) {
    super({
      type: 'CREATE_CLIENT.EVENT',
      specversion: 'v1.0.0',
      source: meta.source,
      meta,
      payload,
      eventSchema,
    })
  }
}

module.exports = { PurchaseCreated }
