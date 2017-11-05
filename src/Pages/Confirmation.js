import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PaymentBlock from '../components/PaymentBlock';
import { numberWithDollarSign } from '../utils/numberWithCommas';
import { SendMoneyButton } from '../components';

export const Confirmation = props => {
  return (
    <Row className="confirmation-page">
      <Col xs={12}>
        <PaymentBlock title="from">
          Select Account
        </PaymentBlock>

        <PaymentBlock title="to">
          <p>Checking account</p>
          <small>Current Balance $23.34</small>
        </PaymentBlock>

        <PaymentBlock title="amount">
          {numberWithDollarSign(23.23)}
        </PaymentBlock>

        <PaymentBlock title="date">
          <input type="date"/>
        </PaymentBlock>
        <div className="confirmation-button-wrapper">
          <SendMoneyButton title="Send Money"/>
        </div>
      </Col>
    </Row>
  );
};

export default Confirmation;
