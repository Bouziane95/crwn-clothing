import React from 'react'
import "../styles/custom-button.styles.scss";

const CustomButton = ({children, ...otherProps}) => {
    console.log(children)
    console.log({...otherProps})
    return <button className="custom-button" {...otherProps}>
        {children}
    </button>
}

export default CustomButton;