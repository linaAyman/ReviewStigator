import React from 'react'
import './Button.css';

const STYLES = ['btn--outline','btn--primary']

const SIZES = ['btn--medium','btn--largr','btn--mobile','btn--wide' ]

const COLOR = ['primary' , 'blue','red','green','gold']

export const Button=({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null


    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick}
        type={type}>{children}</button>
    )
}
