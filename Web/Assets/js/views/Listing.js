import React, { Component } from 'react'
import ProductItem from '../components/ProductItem';

export class Listing extends Component {
  render() {
    return (
      <div>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    )
  }
}

export default Listing
