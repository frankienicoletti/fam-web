import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './styles.css';

// Component will be simulated no need to hook it up
const PaymentBlock = props => {
  return (
    <Row className="payment-block no-margin">
      <Col xs={1}>
        <input type="radio" name="confirmation-radio"/>
      </Col>
      <Col xs={4}>
        <p className="details-title">{props.title}</p>
      </Col>
      <Col className="payment-right-section" xs={6}>
        {props.children}
      </Col>
      <Col className="details-right-section" xs={1}>
        <span className="block-link">></span>
      </Col>
    </Row>
  );
};

export default PaymentBlock;
