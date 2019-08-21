import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../actions'
import './cartItem.css'


class CartItem extends Component {
    render() {
        const { product, addToCart } = this.props

        return <li className='cartItem'>
            <img src={product.image} />
            <div className='name'>
                <label>{product.name}</label>
                <div>₪{product.price}</div>
            </div>
            <div>
                <button onClick={() => {
                    addToCart({...product,amount:product.amount - 1})
                }}>-</button>
                <span>{product.amount}</span>
                <button onClick={() => {
                    addToCart({...product,amount:product.amount + 1})
                }}>+</button>
            </div>
        </li>
    }
}


export default connect(state => ({
}), { addToCart })(CartItem)