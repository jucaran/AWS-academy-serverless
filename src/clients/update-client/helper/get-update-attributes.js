const getUpdateParams = (updated, old) => {
  let UpdateExpression = 'SET'
  const ExpressionAttributeValues = {}

  Object.keys(updated).forEach(key => {
    if (updated[key] !== old[key]) {
      UpdateExpression += ` ${key} = :${key},`
      ExpressionAttributeValues[`:${key}`] = updated[key]
    }
  })

  if (UpdateExpression.endsWith(',')) UpdateExpression = UpdateExpression.slice(0, -1)

  return { UpdateExpression, ExpressionAttributeValues }
}

module.exports = {
  getUpdateParams,
}
