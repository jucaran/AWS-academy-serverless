'use strict'

const { DownstreamEvent } = require('@ranty/nbased/schema/downstreamEvent')

const inputSchema = {
  schema: {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    dni: { type: String, required: true },
    birth: { type: String, required: true },
  },
  settings: { strict: false },
}

class ClientCreated extends DownstreamEvent {
  constructor(payload, meta) {
    super({
      type: 'CREATE_CLIENT.EVENT',
      specversion: 'v1.0.0',
      source: meta.source,
      payload,
      inputSchema,
    })
  }
}

module.exports = { ClientCreated }
