import React from 'react'
import './tooltip.css'

export const Tooltip = (props) => {
    return(
        <div title={props.title} className="tooltip__container"><img src={props.url} alt={props.alt}/><span className="tooltip__message">{props.message}</span></div>
    )
}