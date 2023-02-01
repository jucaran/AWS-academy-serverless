const { InputValidation } = require('ebased/schema/inputValidation');

const inputSchema = {
  schema: {
    dni: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthdate: { type: String, required: true },
  },
  settings: { strict: true },
};

class ValidateCreateClientInput extends InputValidation {
  constructor(payload, meta) {
    super({
      type: 'CREATE.CLIENT.VALIDATE.INPUT',
      specversion: 'v1.0.0',
      source: meta.source,
      payload,
      inputSchema,
    });
  }
}

module.exports = { ValidateCreateClientInput };
