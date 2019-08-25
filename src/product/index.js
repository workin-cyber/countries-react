import React, { Component } from 'react'
import { addToCart } from '../actions'
import { connect } from 'react-redux'
import Modal from '../modal'
import UpdateProduct from '../updateProduct'
import './product.css'

class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    update = product => {
        this.setState({ updateMode: product })
    }

    render() {
        const { addToCart, id, name, image, amount, price, cart = [], adminMode } = this.props,
            { updateMode } = this.state,
            cartProduct = cart.find(p => p.id == id) || {}

        return <>
            <Modal open={updateMode} title={`עריכת מוצר: ${name}`}>
                <UpdateProduct product={this.props} />
            </Modal>
            <div className={`product ${adminMode ? 'editMode' : ''}`}>
                <img src={image} />
                <div>{name}</div>
                <div>₪{price}</div>
                <button onClick={
                    adminMode ? () => this.update({
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
        </>
    }

}


export default connect(state => ({
    cart: state.cart,
    adminMode: state.adminMode
}), { addToCart })(Product)