const calculateAge = rawBirthdate => {
  const [date, month, year] = rawBirthdate.split('/')

  const today = new Date()
  const birthdate = new Date(year, month - 1, date)

  let age = today.getFullYear() - birthdate.getFullYear()
  const m = today.getMonth() - birthdate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) age--

  return age
}

module.exports = { calculateAge };