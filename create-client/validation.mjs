export const validateUser = event => {
  if (!checkAttributes(event)) throw new Error('El usuario tiene atributos incorrectos')

  if (!checkAge(event.birthdate)) throw new Error('El usuario debe tener entre 18 y 65 años')
}

const checkAttributes = user => {
  const userKeys = ['dni', 'firstName', 'lastName', 'birthdate']
  const objectKeys = Object.keys(user)
  return userKeys.every(k => objectKeys.includes(k)) && !objectKeys.some(k => !userKeys.includes(k))
}

const checkAge = rawBirthdate => {
  const [date, month, year] = rawBirthdate.split('/')

  const today = new Date()
  const birthdate = new Date(year, month -1, date)

  let age = today.getFullYear() - birthdate.getFullYear()
  const m = today.getMonth() - birthdate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) age--

  return age >= 18 && age <= 65
}
