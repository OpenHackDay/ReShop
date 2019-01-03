import React, { Component } from 'react'
import ProductItem from './ProductItem/ProductItem'
import { Grid } from '@material-ui/core'

export class ProductList extends Component {
  render () {
    const products = this.props.products
    const p = products ? products : {}
    const productsArray = Object.keys(p).map(i => p[i])
    return (
      <Grid container spacing={16}>
        {productsArray.map((product) => <ProductItem key={product.id} product={product} />)}
      </Grid>
    )
  }
}

export default ProductList
