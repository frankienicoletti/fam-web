import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  Link,
} from 'react-router-dom';
import { Subtitle, Block } from '../components';

const AccountBlock = subtitle => props => {
  return (
    <Col xs={12}>
      <Subtitle
        subtitle={subtitle}
      />
      <Block
        title={props.title}
        balance={props.balance}
      />
    </Col>
  );
};

const CheckingBlock = AccountBlock('Checking');

export const Accounts = props => {
  return (
    <Row className="balances-page">
      <Link to="/statements">
        <CheckingBlock
          title="Checking - 3456"
          balance={props.balance}
        />
      </Link>
    </Row>
  );
};

export default Accounts;
