import React, { Component } from 'react'
import './modal.css'

class Modal extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidUpdate(prevProps) {
        if (prevProps.open != this.props.open)
            this.setState({ open: this.props.open })
    }
    
    close = () => {
        this.setState({ open: false })
    }

    render() {
        const { open } = this.state,
            { title, children } = this.props
        //const open = this.props.open

        return open ? <div className='modal'>
            <div className='overlay' onClick={this.close}></div>
            <div className='content'>
                <h3>{title}</h3>
                <span className='close' onClick={this.close}>X</span>
                <div className='children'>{children}</div>
            </div>
        </div> : null
    }

}

export default Modal