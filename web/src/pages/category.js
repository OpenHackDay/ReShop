import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProduct, removeProduct, fetchProducts } from '../actions'
import { Grid } from '@material-ui/core'
import ProductList from '../components/ProductList'
import axios from 'axios'

class Category extends Component {
  componentDidMount = () => {
    this.props.fetchProducts()
  }
  
  render () {
    const { state, addProduct, removeProduct, fetchProducts } = this.props
    return (
      <Grid container>
        <Grid container style={{height: 50}}>
          {console.log('fetched', state.products)}
        </Grid>
        <ProductList productInfo={state.products} products={state.products} />
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({ state })
const mapDispatchToProps = { addProduct, removeProduct, fetchProducts }

export default connect(mapStateToProps, mapDispatchToProps)(Category)
