import { DynamoDB } from "@aws-sdk/client-dynamodb"

const db = new DynamoDB({ 
  region: process.env.REGION,
})

export const saveUser = async user => {
  await db.putItem({
    TableName: process.env.CLIENTS_TABLE,
    Item: {
      dni: { S: user.dni },
      firstName: { S: user.firstName },
      lastName: { S: user.lastName },
      birthdate: { S: user.birthdate },
    },
  })
}
