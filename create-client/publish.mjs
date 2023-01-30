import { SNS } from '@aws-sdk/client-sns'

const sns = new SNS({ region: process.env.REGION })

export const publishNewClient = async (user) => {
  sns.publish({
    Message: user,
    TopicArn: process.env.CLIENT_CREATED_TOPIC_ARN
  })
}
