import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Hero } from '../../components';
import './styles.css';

const RewardsCard = props => {
  return (
    <Row className="rewards-card row">
      <Col xs={4}>
        <img
          className="img-responsive"
          src={props.image || 'http://placehold.it/450x300'}
        />
      </Col>
      <Col xs={8}>
        <p className="rewards-title">
          {props.title}
        </p>
        <p className="rewards-content">
          {props.content}
        </p>
        <Button
          {...props}
          className="rewards-card-button"
          bsSize="large"
        >
          {props.amount}
        </Button>
      </Col>
    </Row>
  );
};

export default RewardsCard;