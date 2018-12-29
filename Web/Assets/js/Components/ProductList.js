import React, { Component } from 'react'
import ProductItem from './ProductItem';

export class ProductList extends Component {
  render() {
    const products = this.props.products
    return (
      <div>
        {products.map(product => <ProductItem product={product} key={product} />)}
      </div>
    )
  }
}

export default ProductList
