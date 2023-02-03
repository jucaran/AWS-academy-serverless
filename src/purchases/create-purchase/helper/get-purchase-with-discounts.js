const getPurchaseWithDiscounts = (purchase, client) => {
  const clientType = client.card.type
  const products = purchase.products.map(product => {
    return {
      ...product,
      price: +product.price.toFixed(2),
      finalPrice: +(clientType == 'Gold' ? product.price * 0.88 : product.price * 0.92).toFixed(2)
    }
  })

  return { ...purchase, products }
}

module.exports = {
  getPurchaseWithDiscounts,
}
