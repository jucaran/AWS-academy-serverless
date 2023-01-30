const getCardExpire = () => {
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  const year = (date.getFullYear() + 5).toString().substring(2)
  return `${month}/${year}`
}

console.log(getCardExpire())
