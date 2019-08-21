import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './cartItem'
import { addToCart, clearCart } from '../actions'
import './cart.css'

class Cart extends Component {
    render() {
        const { cartOpen, cart, clearCart } = this.props

        return <div className={`cart ${cartOpen ? 'cartOpen' : ''}`}>
            <h2>רשימת קניות</h2>
            {cart.length ?  <img onClick={clearCart} className='clear' src='http://cdn.onlinewebfonts.com/svg/img_411751.png' />:null}
            <ul>{
                cart.map(product => <CartItem key={product.id} product={product} />)
            }</ul>
            <h3>
                <label>סה"כ:</label>
                <span>₪{cart.reduce((acc, curr) => (acc + (curr.price * curr.amount)), 0)}</span>
            </h3>
        </div>
    }
}


export default connect(state => ({
    cart: state.cart
}), { addToCart, clearCart })(Cart)