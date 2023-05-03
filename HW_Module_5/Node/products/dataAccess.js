const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    isFavourite: true
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    isFavourite: false
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
    isFavourite: false
  }, {
    id: 4,
    name: 'Product 3',
    price: 300,
    isFavourite: true
  }, {
    id: 5,
    name: 'Product 3',
    price: 300,
    isFavourite: true
  }, {
    id: 6,
    name: 'Product 3',
    price: 300,
    isFavourite: false
  }, {
    id: 7,
    name: 'Product 3',
    price: 300,
    isFavourite: true
  }, {
    id: 8,
    name: 'Product 3',
    price: 300,
    isFavourite: false
  }, {
    id: 9,
    name: 'Product 3',
    price: 300,
    isFavourite: true
  }, {
    id: 10,
    name: 'Product 3',
    price: 300,
    isFavourite: false
  },
]

export const getProducts = () => products

export const getProduct = (id) => products.filter(el => el.id == id)

export const addProduct = (data) => {
  products.push(data)
  return {status: "OK"}
}

export const deleteProduct = (id) => {
  const index = products.findIndex(item => item.id == id)
  products.splice(index, 1)
  return {status: "OK"}
}

export const putProduct = (data) => {
  const index = products.findIndex(item => item.id == data.id)
  products.splice(index, 1)
  products.push(data)
  return {status: "OK"}
}