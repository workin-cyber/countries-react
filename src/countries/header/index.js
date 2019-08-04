import React, { Component } from 'react'
import Title from './title'
import Search from './search'
import './header.css'

class Header extends Component {

    render() {
        return <header>
            <Title {...this.props}/>
            <Search change={this.props.change}/>
        </header>
    }

}

export default Header