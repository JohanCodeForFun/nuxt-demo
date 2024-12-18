export default defineEventHandler(async (event) => {
  const products = [
    { id: 1, title: "Produkt ett"},
    { id: 2, title: "Produkt två"},
    { id: 3, title: "Produkt tre"},
  ]

  return products;
})