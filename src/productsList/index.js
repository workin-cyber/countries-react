import React, { Component } from 'react'
import { fetchProducts } from '../actions'
import { connect } from 'react-redux'
import Product from '../product'
import './products.css'

class ProductsList extends Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        const { products = [] } = this.props

        return <div className='productsList'>{
            products.map(prod => <Product key={prod.name} {...prod} />)
        }</div>

    }
}

export default connect(state => ({
    products: state.products
}), { fetchProducts })(ProductsList)