import { DynamoDB } from '@aws-sdk/client-dynamodb'

const db = new DynamoDB({
  region: process.env.REGION,
})

export const getClient = async client => {
  const clientResp = await db.getItem({
    TableName: process.env.CLIENTS_TABLE,
    Key: {
      dni: { S: client.dni },
    },
  })
  return clientResp.Item
}

export const saveClientGift = async (client, gift) => {
    await db.updateItem({
    TableName: process.env.CLIENTS_TABLE,
    Key: {
      dni: { S: client.dni },
    },
    UpdateExpression: 'SET gift = :gift',
    ExpressionAttributeValues: {
      ':gift': { S: gift },
    },
  })
}
