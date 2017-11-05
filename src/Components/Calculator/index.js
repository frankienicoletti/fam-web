import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, ControlLabel, FormControl, Button, Tab } from 'react-bootstrap';
import './styles.css';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

// {
// 	"balance": 100,
// 	"interest_interest_rate": 10,
// 	"total_months": 2
// }

// {
// 	"balance": 100,
// 	"interest_interest_rate": 10,
// 	"monthly_payment": 50.00
// }

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
}


class FormInstance extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      balance: 10,
      interest_rate: 10,
      total_months: 10,
      monthly_payment: 20
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (value, name) {
    value = typeof value == 'object' ? value.target.value : value;
    this.setState({[name]: +value});
  };

  render () {
    
    return (
      <Form horizontal onSubmit={(e) => this.props.handleSubmit(e, this.props.month)}>
        <FormGroupInstance label={'Current loan balance ($)'} name={'balance'} value={this.state.balance} handleChange={this.handleChange} />
        <FormGroupInstance label={'Annual percentage interest_rate (0% to 40%)'} name={'interest_rate'} value={this.state.interest_rate} handleChange={this.handleChange} />
        <FormGroupInstance label={'Current monthly payment ($)'} name={this.props.month} value={this.state[this.props.month]} handleChange={this.handleChange} />

        <FormGroup>
          <Col xs={4} className='submit'>
            <Button type="submit" bsStyle="primary" >
              Calculate
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default FormInstance;