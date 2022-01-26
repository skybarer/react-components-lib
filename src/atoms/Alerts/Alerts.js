import React from 'react';
import PropTypes from 'prop-types';

export const Alerts = ({ label = 'Alerts', backgroundColor, onClick }) => {
  return (
    <div
      style={
        {
          "background": "#E1FFD4",
          "color": "#66BF3C",
          "fontWeight": "700",
          "fontSize": "14px",
          "padding": "10px 20px",
          "marginBottom": "24px",
          "borderRadius": "4px",
          "border": "1px solid rgba(0,0,0,.1)",
          "textAlign": "center",
          "width": '100%'
        }
      }>
      {label}
    </div>
  );
}

Alerts.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Alerts.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};
