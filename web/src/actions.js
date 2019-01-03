import "regenerator-runtime/runtime";
import axios from 'axios'
import * as api from './api'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const GET_PRODUCTS = 'GET_PRODUCTS'

export const addProduct = (name) => ({ type: ADD_PRODUCT, name })
export const removeProduct = () => ({ type: REMOVE_PRODUCT })

const getProducts = (products) => ({ type: GET_PRODUCTS, products })

export const fetchProducts = () => async (dispatch, getState) => {
  // dispatch(addProduct)
  const products = await api.getProducts()
  dispatch(getProducts(products.data))
}
