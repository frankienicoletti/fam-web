import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  Subtitle,
  Details,
  Filter,
  StatementButtons
} from '../components';
import Balance from "../components/Balance/index";
import PaymentButton from "../components/PaymentButton/index";

const pendingTransactions = () => {
  return (
    <Row>
      <Col xs={12}>
        <Subtitle subtitle="Pending Transactions"/>
        <Details
          pending
          paid
          date="12/12/12"
          amount={45.09}
        />
        <Details
          pending
          date="12/12/12"
          amount={45.09}
        />
      </Col>
    </Row>
  );
};

const dayTransactions = () => {
  return (
    <Row>
      <Col xs={12}>
        <Subtitle subtitle="Monday 12/30/17"/>
        <Details
          title="Golf Park"
          amount={45.09}
        />
      </Col>
      <Col xs={12}>
        <Subtitle subtitle="Tuesday 01/01/18"/>
        <Details
          title="Gamestop"
          amount={435.09}
        />
      </Col>
      <Col xs={12}>
        <Subtitle subtitle="Wednesday 01/02/18"/>
        <Details
          title="Catfish Billy"
          amount={45.09}
        />
      </Col>
    </Row>
  );
};

export const Statements = props => {
  return (
    <Row className="statements-page">
      <Col xs={12}>
        <Balance balance={34.54}/>
        <PaymentButton title="Make a Payment"/>
        {pendingTransactions()}
        <Filter title="Transaction"/>
        <StatementButtons
          btn1Text="Since Last Statement"
          btn2Text="Statements"
        />
        {dayTransactions()}
      </Col>
    </Row>
  );
};

export default Statements;
