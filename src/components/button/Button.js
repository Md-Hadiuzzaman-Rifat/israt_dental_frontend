import React from 'react';
import "./Button.css";
const Button = ({children,...rest}) => {
    return (
        <div className='button'>
            <button {...rest}>
                {children}
            </button>
        </div>
    );
};

export default Button;