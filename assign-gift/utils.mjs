export const getGift = rawBirthdate => {
  const [day, month, year] = rawBirthdate.split('/')
  const birthdate = new Date(+year, +month, +day)
  let date = Math.floor((birthdate - new Date(birthdate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))

  let season
  if (date >= 81 && date <= 172) {
    season = 'fall'
  }

  if (date >= 173 && date <= 264) {
    season = 'winter'
  }

  if (date >= 265 && date <= 355) {
    season = 'winter'
  }

  if (date >= 356 || (date >= 1 && date <= 80)) {
    season = 'summer'
  }

  const gifts = {
    fall: 'buzo',
    winter: 'sweater',
    spring: 'camisa',
    summer: 'remera',
  }
  return gifts[season || 'summer']
}
