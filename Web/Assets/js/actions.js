export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export function addProduct(name) {
  return {
    type: ADD_PRODUCT,
    name
  }
}

export function removeProduct() {
  return {
    type: REMOVE_PRODUCT
  }
}
