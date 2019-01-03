import React, { Component } from 'react'
import { CardContent, Card, Grid, Paper, CardMedia } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  card: {
    maxWidth: 400,
    height: 200,
    marginBottom: 10
  },
  media: {
    width: '100%',
    height: '70%',
    margin: '0 auto'
  },
  productInfo: {
    height: '30%',
    alignItems: 'flex-end'
  }
})

class ProductItem extends Component {
  render () {
    const { classes, product } = this.props
    return (
      <Grid xs={3} item>
        <Paper className={classes.card}>
          <CardMedia
            className={classes.media}
            image={`https://source.unsplash.com/collection/190727/200x${product.Width*5}`}
          />
          <Grid container className={classes.productInfo}>
            <div className={classes.productName}>{product.name}</div>
            <div className="productPrice">{product.price}$</div>
          </Grid>
        </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(ProductItem)
