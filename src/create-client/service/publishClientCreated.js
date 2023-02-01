const { publish } = require('ebased/service/downstream/sns')

const publishNewClient = async (client) => {
  publish({
    Message: client,
    TopicArn: process.env.CLIENT_CREATED_TOPIC_ARN
  })
}

module.exports = {
  publishNewClient,
}

