import { DynamoDB } from '@aws-sdk/client-dynamodb'
import { getCardCv, getCardNumber, getCardExpire } from './utils.mjs'

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

export const saveClientCard = async (client, type) => {
  await db.updateItem({
    TableName: process.env.CLIENTS_TABLE,
    Key: {
      dni: { S: client.dni },
    },
    UpdateExpression: 'SET card = :card',
    ExpressionAttributeValues: {
      ':card': {
        M: {
          number: {
            S: getCardNumber(),
          },
          expire: {
            S: getCardExpire(),
          },
          cv: {
            S: getCardCv(),
          },
          type : {
            S: type
          }
        },
      },
    },
  })
}
