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
          min={0}
          max={100}
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
    this.state = {
      balance: 10,
      interest_rate: 10,
      [this.props.month]: 20,
      submitted: false,
      data: {}
    };
  }

  handleChange = (value, name) => {
    value = typeof value === 'object' ? value.target.value : value;
    this.setState({ [name]: +value });
  };

  handleSubmit = e => {
    e.preventDefault();
    payoff(this.props.userId, this.state)
      .then(json => {
        this.setState({
          ...this.state,
          json
        });
      })
      .catch(err => {
        console.log('error :\n', err);
      })
  };

  render() {
    return (
      <div>
        {
          this.state.submitted
            ? <Chart data={this.state.data}/>
            : <Form horizontal onSubmit={this.handleSubmit}>
              <FormGroupInstance
                label={'Current loan balance ($)'}
                name={'balance'}
                value={this.state.balance}
                handleChange={this.handleChange}/>
              <FormGroupInstance
                label={'Current monthly payment ($)'}
                name={this.props.month}
                value={this.state[this.props.month]}
                handleChange={this.handleChange}/>

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


