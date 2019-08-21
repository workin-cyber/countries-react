import React, { Component } from 'react'
import { addToCart } from '../actions'
import { connect } from 'react-redux'
import './product.css'

class Product extends Component {

    edit = product => {
        console.log('edit', product)
    }

    render() {
        const { addToCart, id, name, image, amount, price, cart = [], adminMode } = this.props,
            cartProduct = cart.find(p => p.id == id) || {}

        return <div className={`product ${adminMode ? 'editMode' : ''}`}>
            <img src={image} />
            <div>{name}</div>
            <div>₪{price}</div>
            <button onClick={
                adminMode ? () => this.edit({
                    id,
                    name,
                    image,
                    price,
                    amount: ((cartProduct.amount || 0) + 1)
                }) :
                    () => addToCart({
                        id,
                        name,
                        image,
                        price,
                        amount: ((cartProduct.amount || 0) + 1)
                    })}>{adminMode ? 'עריכה' : `הוסף לסל (${cartProduct.amount || ''})`}</button>
        </div>
    }

}


export default connect(state => ({
    cart: state.cart,
    adminMode: state.adminMode
}), { addToCart })(Product)