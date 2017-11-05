import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './styles.css';

class RewardsCard extends Component {
  render() {
    return (
      <Row className="rewards-card row">

        <Col xs={4}>
          <img
            className="img-responsive"
            src={this.props.image || 'http://placehold.it/450x300'}
            alt="rewards"
          />
        </Col>
        <Col xs={8}>
          <p className="rewards-title">
            {this.props.title}
          </p>
          <p className="rewards-content">
            {this.props.content}
          </p>
          <Button
            className="rewards-card-button"
            bsSize="large"
          >
            {this.props.amount}
          </Button>
        </Col>
      </Row>
    );
  }
}

export default RewardsCard;
