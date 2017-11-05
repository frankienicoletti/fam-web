import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  Link,
  NavLink,
} from 'react-router-dom';
import { Subtitle, Block } from '../components';
import { numberWithCommas } from '../utils/numberWithCommas';

const AccountBlock = subtitle => props => {
  return (
    <Col xs={12}>
      <Subtitle
        subtitle={subtitle}
      />
      <Block
        title={props.title}
        balance={props.balance && numberWithCommas(props.balance)}
      />
    </Col>
  );
};

const CheckingBlock = AccountBlock('Checking');
const SavingsBlock = AccountBlock('Savings');
const CreditCardsBlock = AccountBlock('Credit Cards');
const InvestmentsBlock = AccountBlock('Investments');

export const Accounts = props => {
  return (
    <Row className="balances-page">
      <Link to="/statements">
        <CheckingBlock
          title="checking - 3456"
          balance="1200"
        />
      </Link>
      <SavingsBlock
        title="checking - 3456"
        balance="1200"
      />
      <CreditCardsBlock
        title="checking - 3456"
        balance="1200"
      />
      <InvestmentsBlock
        title="checking - 3456"
        balance="1200"
      />
    </Row>
  );
};

export default Accounts;