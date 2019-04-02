import React from 'react';
import './nav.css'

const Type = props => {
console.log(props.name)
        return(
            <div className="type">
            <div className="label">{props.name}</div>
            </div>
        )

}

export default Type