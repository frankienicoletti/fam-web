import React from 'react';
import { Row } from 'react-bootstrap';
import {
  Link,
} from 'react-router-dom';

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
