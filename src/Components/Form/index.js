import './styles.css';
import 'react-rangeslider/lib/index.css';
import React, { Component } from 'react';
import { Col, Form, FormGroup, ControlLabel, FormControl, Button, Radio } from 'react-bootstrap';
import Slider from 'react-rangeslider';
import { payoff } from '../../api';
import Chart from '../Chart';
import {numberWithDollarSign} from '../../utils/numberWithCommas'


const FormGroupInstance = (props) => {
  console.log(props)
  return (
    <FormGroup controlId="formHorizontalNumber">
      <Col
        componentClass={ControlLabel}
        xs={6}>
        {props.label}
      </Col>
      <Col xs={6}>
        <FormControl
          name={props.name}
          type="number"
          value={props.balance ? (props.balance) : ''}
          disabled={props.disabled}
          onChange={(e) => props.handleChange(e, props.name)}
        />
      </Col>
      <Col xs={12}>
        <Slider
          min={props.min}
          max={props.max}
          value={props.balance}
        />
      </Col>
    </FormGroup>
  );
};

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      balance: this.props.user.balance | 0,
      interest_rate: this.props.user.interest_rate | 0,
      minimum_payment: this.props.user.minimum_payment | 0,
      type: 'monthly_payment',
      graph: []
    };

    this.state = this.initialState
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
  }

  handleChange (value, name) {
    value = typeof value === 'object' ? value.target.value : value;
    this.setState({ [name]: +value });
  };

  handleSubmit (e) {
    e.preventDefault();

    const data = {
			"balance": this.state.balance,
			"interest_rate": this.state.interest_rate,
			[this.state.type]: this.state.monthly_payment
		}

    payoff(this.props.user.userId, data)
    .then(json => {
      this.setState(json);
    })
    .catch(err => {
      console.log('error :\n', err);
    })
  };

  handleRadioChange(e) {
  	this.setState({type: e.target.id})
  }

  setInitialState () {
    for (var key in this.state) {
      delete this.state[key]
    }
    this.setState(this.initialState)
  };

  render() {
    return (
      <div id='calculator'>
        {
          this.state.graph.length
            ? <div>
                <Chart data={this.state.graph} />
                <Col xs={4} className='submit'>
                  <Button bsStyle="primary" onClick={() => {
                    this.setInitialState()  
                  }}>
                    Back
                  </Button>
                </Col>
              </div>
            : <Form horizontal onSubmit={this.handleSubmit}>
              <FormGroupInstance
                label={'This is your current balance: '}
                name={'balance'}
                balance={this.state.balance}
                disabled={true}
                min={25}
                max={1000} />
              <FormGroupInstance
                label={'This is your interest rate: '}
                name={'rate'}
                balance={this.state['interest_rate']}
                disabled={true}
                min={0}
                max={100} />

              <FormGroup controlId="formHorizontalNumber">
                <Col xs={12} className='radiogroup'>
                <Radio name="radioGroup" checked={this.state.type=='monthly_payment'} id='monthly_payment' onChange={this.handleRadioChange} >
                  Estimated monthly payment: 
                </Radio>
                <Radio name="radioGroup" id='total_months' checked={this.state.type!='monthly_payment'} onChange={this.handleRadioChange}>
                  Estimated number of months:
                </Radio>
                </Col>
                <Col xs={6} />
                <Col xs={6}>
                  <FormControl
                    type="number"
                    value={this.state.minimum_payment ? (this.state.minimum_payment) : ''}
                    onChange={(e) => this.handleChange(e, 'minimum_payment')}
                  />
                </Col>
                <Col xs={12}>
                  <Slider
                    min={0}
                    max={100}
                    value={this.state.minimum_payment}
                    onChange={(e) => this.handleChange(e, 'minimum_payment')}
                  />
                </Col>
              </FormGroup>
                
              <FormGroup>
                <Col xs={8} ></Col>
                <Col xs={4} >
                  <Button type="submit" bsStyle="primary">
                    Calculate
                  </Button>
                </Col>
              </FormGroup>
            </Form>
        }
      </div>
    );
  }
}

export default Calculator;


