import React from 'react';
import { Row } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.css';
import './styles.css';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

const FooterBtn = props => {
  return (
    <NavLink
      activeClassName="footer-btn-active"
      to={props.to}
      className={classnames('footer-btn col-xs-3')}
    >
      <i className={`fa ${props.icon}`} aria-hidden="true"/>
      <p className="footer-btn-text">{props.text}</p>
    </NavLink>
  );
};

const Footer = props => {
  return (
    <Row className="footer-btn-wrapper">
      <FooterBtn to="/accounts" icon="fa-bars"/>
      <FooterBtn to="/calculator" icon="fa-money"/>
      <FooterBtn to="/rewards" icon="fa-trophy"/>
      <FooterBtn to="/settings" icon="fa-gear"/>
    </Row>
  );
};

export default Footer;
