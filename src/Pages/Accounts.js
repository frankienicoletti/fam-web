import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  Link,
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
          title="Checking - 3456"
          balance="12.23"
        />
      </Link>
      <SavingsBlock
        title="Savings - 3456"
        balance="34.43"
      />
      <CreditCardsBlock
        title="Credit card - 3456"
        balance="14.43"
      />
      <InvestmentsBlock
        title="Investment - 3456"
        balance="386.54"
      />
    </Row>
  );
};

export default Accounts;
