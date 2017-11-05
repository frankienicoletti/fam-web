import React from 'react';
import { Button } from 'react-bootstrap';
import './styles.css';
import { NavLink } from 'react-router-dom';

const PaymentButton = props => {
  return (
    <div className="payment-button-wrapper">
      <NavLink
        to="/confirmation"
      >
        <Button
          {...props}
          className="payment-button"
          bsStyle="primary"
          bsSize="large"
        >
          {props.title}
        </Button>
      </NavLink>
    </div>
  );
};

export default PaymentButton;
