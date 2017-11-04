import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.css';

export default props => {
  return (
    <Row className="Subtitle no-margin">
      <Col xs={12}>
        <p className="content">{props.subtitle}</p>
      </Col>
    </Row>
  )
};