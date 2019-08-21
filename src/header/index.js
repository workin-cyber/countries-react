import React, { Component } from 'react'
import { changeAdminMode } from '../actions'
import { connect } from 'react-redux'
import Cart from '../cart'
import './header.css'


class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const
            { changeAdminMode, adminMode } = this.props,
            { cartOpen } = this.state

        return <header>
            <div className='content'>
                <div onClick={() => changeAdminMode(!adminMode)} className='adminModeBtn'>{adminMode ? 'מצב מנהל' : 'עבור למצב מנהל'}</div>
                <div>SuperStore</div>
                <div className='headerCart'>
                    <span onClick={() => this.setState({ cartOpen: !this.state.cartOpen })}>עגלה</span>
                    <Cart cartOpen={cartOpen} />
                </div>
            </div>
        </header>
    }
}

export default connect(state => ({
    adminMode: state.adminMode
}), { changeAdminMode })(Header)