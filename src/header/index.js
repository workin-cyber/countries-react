import React, { Component } from 'react'
import { changeAdminMode } from '../actions'
import { connect } from 'react-redux'
import Cart from '../cart'
import Modal from '../modal'
import Login from '../login'
import './header.css'


class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const
            { changeAdminMode, adminMode } = this.props,
            { cartOpen, loginMode } = this.state

        return <>
            <Modal open={loginMode} title='כניסה'>
                <Login />
            </Modal>
            <header>
                <div className='content'>
                    <div onClick={() => changeAdminMode(!adminMode)} className='adminModeBtn'>{adminMode ? 'מצב מנהל' : 'עבור למצב מנהל'}</div>
                    <div className='loginBtn' onClick={() => this.setState({ loginMode: !loginMode })}>כניסה</div>
                    <div>SuperStore</div>
                    <div className='headerCart'>
                        <span onClick={() => this.setState({ cartOpen: !this.state.cartOpen })}>עגלה</span>
                        <Cart cartOpen={cartOpen} />
                    </div>
                </div>
            </header>
        </>
    }
}

export default connect(state => ({
    adminMode: state.adminMode
}), { changeAdminMode })(Header)