import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './styles.css';

const Details = props => {
  return (
    <Row className="details-wrapper">
      <Col xs={8}>
        <p className="details-title">{props.title}</p>
        {props.date && <p className="details-date">{props.date}</p>}
      </Col>
      <Col className="details-right-section" xs={4}>
        <p
          className="details-amount"
        >
          {props.amount}
        </p>
      </Col>
    </Row>
  );
};

export default Details;