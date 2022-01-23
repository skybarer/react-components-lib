import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ label = 'button', backgroundColor, onClick }) {
  return (
    <button onClick={onClick} style={{ backgroundColor, border: 'none', padding: '0.7rem', borderRadius: '4px' }}>
      {label}
    </button>
  );
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};

// {
//   border: none !important;
//   padding: 0.7rem;
//   font-size: 14px;
//   font-weight: 500;
//   /* line-height: 36px; */
//   color: #000000;
//   border-radius: 4px;
//   transition: background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
// }