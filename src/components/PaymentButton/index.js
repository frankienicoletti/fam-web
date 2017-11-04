import React from 'react';
import { Button } from 'react-bootstrap';
import './styles.css';

const PaymentButton = props => {
  return (
    <div className="payment-button-wrapper">
      <Button
        {...props}
        className="payment-button"
        bsStyle="primary"
        bsSize="large"
      >
        {props.title}
      </Button>
    </div>
  );
};

export default PaymentButton;