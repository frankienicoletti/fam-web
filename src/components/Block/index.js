import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './styles.css';
import { numberWithDollarSign } from "../../utils/numberWithCommas";

const Block = props => {
  return (
    <Row className="block no-margin">
      <Col
        className="block-left-section"
        xs={8}
      >
        <p className="block-title">{props.title}</p>
        <p className="block-balance">{numberWithDollarSign(props.balance)}</p>
      </Col>
      <Col
        className="block-right-section"
        xs={4}>
        <span className="block-link">></span>
      </Col>
    </Row>
  );
};

export default Block;
