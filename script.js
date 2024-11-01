// High order methods assignment

const products = [
    { name: "Smartphone", price: 800, category: "electronics" },
    { name: "Headphones", price: 150, category: "electronics" },
    { name: "Coffee Maker", price: 100, category: "home appliances" },
    { name: "Blender", price: 250, category: "home appliances" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "T-shirt", price: 50, category: "clothing" },
    { name: "Sneakers", price: 300, category: "clothing" }
  ];

//   1. Use .filter() to extract all products that cost less than 200

const cheapProducts = products.filter((product) => product.price < 200)
console.log("Products under 200:" , cheapProducts)

// 2. Use .map() to make a list that only contain the product names

const productNames = products.map((product) => product.name)
console.log("Product Names:", productNames)

// 3. Use a chained combination of .filter() and .map() to list only
// the names of all products in a specific category (e.g. 'electronics')

// products.forEach((p) => {
//   console.log(p)
// })
const electronicsProduct = products.filter((products) => products.category === "electronics") .map((products) => products.name)

console.log("Electronics Products:", electronicsProduct)


// 4. Use .some() to check if there are any products that cost more than 1000

const expensiveProduct = products.some((product) => product.price > 1000)

console.log("Products that cost over 1000:", expensiveProduct)


// 5. Use .reduce() to find the total cost of all the products.


// let totalCost = 0
// products.forEach(product => {
//   totalCost += product.price
// })

const totalCost = products.reduce((t, p) => {
  return t + p.price
}, 0)

// t = total
// p = product

console.log("Total cost of all the products:", totalCost)