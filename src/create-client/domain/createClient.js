const { ValidateCreateClientInput } = require('../schema/createClientInput');
const { createClient } = require('../service/getExample');

module.exports = async (commandPayload, commandMeta) => {
  new ValidateCreateClientInput(commandPayload, commandMeta);

  await createClient(commandPayload);

  return {
    status: 200,
    body: JSON.stringify('Usuario creado correctamente'),
  };
};
