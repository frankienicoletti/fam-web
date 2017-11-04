import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './styles.css';
import 'font-awesome/css/font-awesome.css';
import classnames from 'classnames';

const FooterBtn = props => {
  return (
    <Col
      xs={3}
      className={classnames('footer-btn', { ['footer-btn-active']: props.active })}
    >
      <i className={`fa ${props.icon}`} aria-hidden="true"/>
      <p className="footer-btn-text">{props.text}</p>
    </Col>
  );
};

const Footer = props => {
  return (
    <Row className="footer-btn-wrapper">
      <FooterBtn active icon="fa-bars" text="Accounts"/>
      <FooterBtn icon="fa-money" text="Move Money"/>
      <FooterBtn icon="fa-ellipsis-h" text="Services"/>
      <FooterBtn icon="fa-gear" text="Settings"/>
    </Row>
  );
};

export default Footer;