import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './styles.css';

class RewardsCard extends Component {
  constructor() {
    super();
    this.state = {
      showTrivia: false,
    };
  }

  showModal = () => {
    this.setState({ showTrivia: true });
  };

  hideModal = () => {
    this.setState({ showTrivia: false });
  };

  renderTrivia = () => {
    const Trivia = this.props.trivia;
    return (
      <Trivia
        closeModal={this.hideModal}
      />
    );
  };

  render() {
    return (
      <Row className="rewards-card row">
        {this.state.showTrivia && this.renderTrivia()}
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
            {...this.props}
            onClick={this.showModal}
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
