import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import PaymentBlock from '../../components/PaymentBlock/index';
import { numberWithDollarSign } from '../../utils/numberWithCommas';
import { SendMoneyButton, Details, Subtitle, RewardsModal } from '../../components';
import goldCup from '../../images/silver-cup.png'
import './styles.css';

class Confirmation extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }

  render() {
    return (
      <Row className="confirmation-page">
        {this.state.showModal &&
        <RewardsModal
          onClick={() => this.setState({ showModal: false })}
          image={goldCup}
        />
        }
        <Col xs={12}>
          <Subtitle subtitle="Send Payment"/>
          <PaymentBlock title="from">
            Select Account
          </PaymentBlock>

          <PaymentBlock title="to">
            <p>Checking account</p>
            <small>{numberWithDollarSign(this.props.balance) || 0}</small>
          </PaymentBlock>

          <PaymentBlock title="amount">
            {numberWithDollarSign(23.23)}
          </PaymentBlock>

          <PaymentBlock title="date">
            <input type="date"/>
          </PaymentBlock>
          <Row>
            <Col>
              <Subtitle subtitle="Credit Info"/>
              <Details
                title="Available Credit For Purchase"
                amount={this.props.credit_limit}
              />
              <Details
                noMoney
                title="Minimum Payment Due"
              >
                {new Date(this.props.due_date).toLocaleString()}
              </Details>
              <Details
                title="Reward Points"
                amount={30}
              />
            </Col>
          </Row>
          <div className="confirmation-button-wrapper">
            <SendMoneyButton
              onClick={() => this.setState({ showModal: true })}
              title="Send Money"
            />
          </div>
        </Col>
      </Row>
    );
  }
}

export default Confirmation;
