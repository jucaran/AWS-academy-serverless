'use strict'

const { DownstreamEvent } = require('@ranty/nbased/schema/downstreamEvent')

const eventSchema = {
  schema: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dni: { type: String, required: true },
    birthdate: { type: String, required: true },
  },
  settings: { strict: false },
}

class ClientUpdated extends DownstreamEvent {
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

module.exports = { ClientUpdated }
