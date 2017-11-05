import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  Subtitle,
  Details,
  Filter,
  StatementButtons
} from '../components';
import Balance from "../components/Balance/index";
import PaymentButton from "../components/PaymentButton/index";
import { getAccountTransactions } from '../api';

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

const dayTransactions = transactions => {
  const components = transactions.map(obj => {
    return (
      <Col xs={12} key={obj.transaction_id}>
        <Subtitle subtitle={new Date(obj.date).toLocaleString()}/>
        <Details
          title={obj.merchant_name}
          amount={obj.amount}
        />
      </Col>
    )
  });
  return (
    <Row>
      {components}
    </Row>
  );
};

class Statements extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
    };
  }

  componentWillMount() {
    getAccountTransactions(this.props.userId)
      .then(data => {
        this.setState({ transactions: data })
      });
  }

  render() {
    console.log('this.state :\n', this.state);
    return (
      <Row className="statements-page">
        <Col xs={12}>
          <Balance balance={this.props.balance}/>
          <PaymentButton title="Make a Payment"/>
          {pendingTransactions()}
          <Filter title="Transaction"/>
          <StatementButtons
            btn1Text="Since Last Statement"
            btn2Text="Statements"
          />
          {dayTransactions(this.state.transactions)}
        </Col>
      </Row>
    );
  }
};

export default Statements;
