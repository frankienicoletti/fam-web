import './styles.css';
import 'react-rangeslider/lib/index.css';
import React, { Component } from 'react';
import { Col, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Slider from 'react-rangeslider';
import { payoff } from '../../api';
import Chart from '../Chart';

const FormGroupInstance = (props) => {
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
          value={props.value ? props.value : ''}
          onChange={(e) => props.handleChange(e, props.name)}
        />
      </Col>
      <Col xs={12}>
        <Slider
          min={props.min}
          max={props.max}
          value={props.value}
          onChange={(e) => props.handleChange(e, props.name)}
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
      [this.props.month]: this.props.user.minimum_payment | 0,
      graph: []
    };

    this.state = this.initialState
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (value, name) {
    value = typeof value === 'object' ? value.target.value : value;
    this.setState({ [name]: +value });
  };

  handleSubmit (e) {
    e.preventDefault();
    payoff(this.props.user.userId, this.state)
    .then(json => {
      this.setState(json);
    })
    .catch(err => {
      console.log('error :\n', err);
    })
  };

  setInitialState () {
    for (var key in this.state) {
      delete this.state[key]
    }
    this.setState(this.initialState)
  }

  render() {
    return (
      <div>
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
                label={'Current loan balance ($)'}
                name={'balance'}
                value={this.state.balance}
                handleChange={this.handleChange}
                min={25}
                max={600} />
              <FormGroupInstance
                label={'Current monthly payment ($)'}
                name={this.props.month}
                value={this.state[this.props.month]}
                handleChange={this.handleChange}
                min={25}
                max={100}
                />

              <FormGroup>
                <Col xs={4} className='submit'>
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


