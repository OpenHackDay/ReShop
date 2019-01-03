import axios from 'axios'

export const url = 'http://localhost:5000'

export const getProducts = () => {
  const products = axios.get(`${url}/products`)
  return products
}

export const getProduct = (id) => {
  const product = axios.get(`${url}/products/${id}`)
  return product
}
