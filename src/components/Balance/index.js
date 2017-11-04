import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { numberWithDollarSign } from '../../utils/numberWithCommas';
import './styles.css';

const Balance = props => {
  return (
    <Row className="balance no-margin">
      <Col xs={12} className="balance-wrapper">
        <h2 className="balance-amount">
          {numberWithDollarSign(props.balance)}
        </h2>
        <p className="balance-text">
          current balance
        </p>
      </Col>
    </Row>

  );
};

export default Balance;