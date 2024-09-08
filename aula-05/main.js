// diferenças var, let e const
// var hello;
// arrow function -> block body e concise body
const getObj = (a,b) => {
  return {
    first: a,
    second: b
  }
}

const sum = (a,b) => a+b
// template literals
`Resultado ${sum}`

// destructuring
const john = {
  name: 'John Textor',
  age: 60,
  addresses: [
    { address: 'San Francisco, California(CA)', country: 'EUA'}
  ]
}

// spread operator
const peter = {
  ...john,
  name: 'Peter',
  age: 25
}

const arr = [{name: '1'}, {name: '2'}]
const arr2 = [...arr]

// console.log(arr)
// console.log(john)

// HOFs -> High Order Functions
const products = [
  { name: 'Camiseta', price: 29.99, category: 'Roupas' },
  { name: 'Calça', price: 79.99, category: 'Roupas' },
  { name: 'Tênis', price: 149.99, category: 'Calçados' },
  { name: 'Chapéu', price: 19.99, category: 'Acessórios' }
];

products.forEach((product) => {
  console.log(`Produto ${product.name} com valor de ${product.price}`)
})

const productsToUpperCase = products.map((product) => product.category.toUpperCase())
console.log(productsToUpperCase)

const filteredProducts  = products.filter((product) => {
  return product.category === 'Roupas'
})
console.log(filteredProducts)

const totalPrice = products.reduce((accumulator, product) => {
  return accumulator += product.price
}, 0)
console.log(totalPrice.toFixed(2))