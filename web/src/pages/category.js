import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from '../components/ProductList'
import {addProduct, removeProduct} from '../actions'

class Category extends Component {
  render () {
    const { state, addProduct, removeProduct } = this.props
    return (
      <div>
        <button onClick={() => addProduct(Math.floor((Math.random() * 1000)))}>ADD</button>
        <button onClick={removeProduct}>REMOVE</button>
        <ProductList products={state.products} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ state })
const mapDispatchToProps = (dispatch) => {
  return {
		addProduct: name => {
			dispatch(addProduct(name));
		},
		removeProduct: () => {
			dispatch(removeProduct());
		}
}}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
