import React, { Component } from 'react'
import { CardContent, Card } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  card: {
    maxWidth: 400,
    width: 100,
    marginBottom: 10
  }
})

class ProductItem extends Component {
  render () {
    const { classes, product } = this.props
    return (
      <Card className={classes.card}>
        <CardContent>{product}</CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(ProductItem)
