import React, { Component } from 'react';
import './nav.css';
import Type from './Type'
import Logo from './img/apple-logo.png'

export default class NavWrapper extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            Types: props.Types,
            Models: props.Models,
        }
    }


    render(){
        return(
            <div className="mainNav">
            <img className="apple-logo" src={Logo} />
            {this.state.Types.map(p =>
            <Type 
            name={p}
            /> 
            )}


            </div>
        )
    }
}