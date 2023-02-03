const getPoints = products =>
  +(products.reduce((acc, curr) => acc + curr.finalPrice, 0) / 200).toFixed(2)

module.exports = {
  getPoints,
}
