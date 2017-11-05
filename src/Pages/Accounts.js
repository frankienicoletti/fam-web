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
const LauncherBlock = AccountBlock('Launcher');

export const Accounts = props => {
  return (
    <Row className="balances-page">
      <CheckingBlock
        title="checking - 1245"
        balance={456.45}
      />
      <Link to="/statements">
        <LauncherBlock
          title="Launchers - 3456"
          balance={props.balance}
        />
      </Link>
    </Row>
  );
};

export default Accounts;
