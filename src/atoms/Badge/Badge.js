import React from 'react';
import PropTypes from 'prop-types';

// https://staxmanade.com/CssToReact/

export const Badge = ({
  content = '5',
  backgroundColor = 'aliceblue',
  borderRadius = '10px',
  color = 'black',
  padding
}) => {
  return (
    <span
      style={{
        backgroundColor,
        borderRadius,
        padding,
        color,
        textAlign: 'center',
        fontSize: 'small'
      }}
    >
      {content}
    </span>
  );
}

Badge.propTypes = {
  content: PropTypes.string.isRequired,
};

Badge.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};
