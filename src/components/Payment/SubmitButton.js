import React from 'react';

const SubmitButton = ({processing, error, children, disabled, ...rest}) => {
    return (
        <button {...rest}
        className={`SubmitButton ${error ? 'SubmitButton--error' : ''}`}
        type="submit"
        disabled={processing || disabled}
      >
        {processing ? 'Processing...' : children}
      </button>
    );
};

export default SubmitButton;


  