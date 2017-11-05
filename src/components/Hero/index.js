import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './style.css';
import trophy from '../../images/trophy1.png';

const HeroBtn = props => {
  return (
    <Button className="hero-btn">
      {props.children}
    </Button>
  );
};

const Hero = () => {
  return (
    <Row className="hero">
      <Col xs={8}>
        <p className="hero-header">
          Capital Rewards
        </p>
        <p className="hero-text">
          Redeem your Capital One Rewards!
        </p>
        <HeroBtn>
          Learn More
        </HeroBtn>
      </Col>
      <Col xs={4}>
        <img className="img-responsive" src={trophy} alt=""/>
      </Col>
    </Row>
  );
};

export default Hero;