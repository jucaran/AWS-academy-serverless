const { InputValidation } = require('ebased/schema/inputValidation')

class ValidateCreateClientInput extends InputValidation {
  constructor(payload, meta) {
    super({
      type: 'CREATE.CLIENT.VALIDATE.INPUT',
      specversion: 'v1.0.0',
      source: meta.source,
      payload,
      schema: {
        strict: true,
        dni: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        birthdate: { type: String, required: true },
      },
    })
  }
}

module.exports = { ValidateCreateClientInput }
