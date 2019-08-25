import React, { Component } from 'react'
import axios from 'axios'
import './updateProduct.css'

class UpdateProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    submit = e => {
        e.preventDefault()
        console.log('submit')

        const { product } = this.props,
            { name, price, image } = this.refs

        const newProduct = {
            ...product,
            name: name.value,
            price: price.value,
            image: image.value,
        }
        console.log(product, newProduct)
        axios.put('http://localhost:1200/products', newProduct)
            .then(res => {
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { } = this.state,
            { product = {} } = this.props,
            { name, price, image } = product

        return <form className='updateProduct' onSubmit={this.submit}>

            <label>
                <span>שם:</span>
                <input required ref='name' defaultValue={name} type='text' placeholder='שם המוצר' />
            </label>

            <label>
                <span>מחיר:</span>
                <input ref='price' defaultValue={price} type='number' placeholder='מחיר המוצר' />
            </label>

            <label>
                <span>תמונה:</span>
                <input ref='image' defaultValue={image} type='text' placeholder='קישור לתמונה' />
            </label>

            <input type='submit' value='שלח' />
        </form>
    }

}

export default UpdateProduct