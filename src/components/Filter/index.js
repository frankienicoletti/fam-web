import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './styles.css';

const Filter = props => {
  return (
    <Row className="filter-wrapper">
      <Col
        className="filter-left-section"
        xs={10}
        xsPush={1}
      >
        <p className="filter-title">
          {props.title}
        </p>
      </Col>
      <Col
        className="filter-right-section"
        xs={2}>
        <a className="filter-btn">Filter</a>
      </Col>
    </Row>
  );
};

export default Filter;