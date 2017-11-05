import React from 'react';
import { Button } from 'react-bootstrap';
import './styles.css';

const SendMoneyButton = props => {
  return (
    <div className="send-money-button-wrapper">
      <Button
        {...props}
        className="send-money-button"
        bsStyle="primary"
        bsSize="large"
      >
        {props.title}
      </Button>
    </div>
  );
};

export default SendMoneyButton;
