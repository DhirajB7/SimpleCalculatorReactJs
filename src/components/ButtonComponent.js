import React, { Component } from 'react'


class ButtonComponent extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
             variable:this.props.name
        }

        this.btnClick = this.btnClick.bind(this)
    }
    

    btnClick(){
        this.props.toChild(this.state.variable)
    }

    render() {
        return (
        <button className="buttonOfCalculator" onClick={this.btnClick}>{this.state.variable}</button>
        )
    }
}

export default ButtonComponent
