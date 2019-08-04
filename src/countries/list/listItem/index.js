import React, { Component } from 'react'
import './listItem.css'

class ListItem extends Component {

    render() {
        const { name,flag } = this.props
        return <li>
          {/*   <img src={flag} /> */}
            <h3>{name}</h3>
        </li>
    }

}

export default ListItem