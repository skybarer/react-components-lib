import React from 'react';
import PropTypes from 'prop-types';

// https://github.com/iiison/react-form

const Input = (
    {
        id = 'input-1',
        type = 'text',
        defaultValue = 'akash',
        placeholder = 'Your username or email',
        className,
        style,
        onChange
    }) => {

    onChange = (e) => {
        defaultValue = e.target.value
    }


    return (
        <input
            id={id}
            type={type}
            className={className}
            placeholder={placeholder}
            onChange={({ target: { value } }) => onChange(value)}
            aria-label="Your username or email"
            aria-invalid="false"
            value={defaultValue}
            name="username"
            aria-required="true"
            aria-describedby="tooltip-input-1"
            style={{
                color: 'black',
                backgroundColor: '#f3f7f7',
                border: '0',
                // border: '1px solid #c2c7d0',
                borderRadius: '0',
                minWidth: '320px',
                width: '100%',
                height: '40px',
                outline: 'none',
                fontSize: '18px',
                padding: '1px 10px',
                boxShadow: 'inset 0 1px 4px rgb(0 0 0 / 10%), 0 0 0 transparent',
                marginBottom: '0',
                boxSizing: 'border-box',
                fontWeight: '400',
                style

            }}>
        </input>
    );
}

Input.propTypes = {
    backgroundColor: PropTypes.string,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    backgroundColor: null,
    onChange: undefined,
};

export default Input;

