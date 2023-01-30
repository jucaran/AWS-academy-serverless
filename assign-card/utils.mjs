export const getClientType = birthdate => {
  if (getAge(birthdate) > 45) return 'Classic'
  return 'Gold'
}

const getAge = rawBirthdate => {
  const [date, month, year] = rawBirthdate.split('/')

  const today = new Date()
  const birthdate = new Date(year, month - 1, date)

  let age = today.getFullYear() - birthdate.getFullYear()
  const m = today.getMonth() - birthdate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) age--

  return age
}

export const getCardNumber = () =>
  Math.floor(Math.random() * 9999999999999999)
    .toString()
    .match(/.{1,4}/g)
    .toString()
    .replace(/,/g, ' ')

export const getCardExpire = () => {
  const date = new Date()
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  const year = (date.getFullYear() + 5).toString().substring(2)
  return `${month}/${year}`
}

export const getCardCv = () => Math.floor(Math.random() * 999).toString()
