import './styles.css';
import 'react-rangeslider/lib/index.css';
import React, { Component } from 'react';
import { Col, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Slider from 'react-rangeslider';
import axios from 'axios'
import Chart from '../Chart';

const data = {
  "balance":100,
  "interest_rate":12.093205759592392,
  "total_months":11,
  "monthly_payment":10,
  "total_interest_cost":11.085438612959692,
  "graph":
  
  [
  {"principal":8.992232853367302,"interest":1.0077671466326992,"balance":91.0077671466327,"month":1},
  
  {"principal":9.082853621812248,"interest":0.9171463781877515,"balance":81.92491352482045,"month":2},
  
  {"principal":9.17438763658961,"interest":0.8256123634103893,"balance":72.75052588823084,"month":3},
  
  {"principal":9.266844101095893,"interest":0.7331558989041072,"balance":63.48368178713495,"month":4},
  
  {"principal":9.360232311476407,"interest":0.6397676885235924,"balance":54.12344947565854,"month":5},
  
  {"principal":9.454561657559966,"interest":0.5454383424400346,"balance":44.668887818098575,"month":6},
  
  {"principal":9.549841623802987,"interest":0.4501583761970134,"balance":35.11904619429559,"month":7},
  
  {"principal":9.646081790243128,"interest":0.35391820975687227,"balance":25.472964404052462,"month":8},
  
  {"principal":9.743291833462518,"interest":0.2567081665374827,"balance":15.729672570589944,"month":9},
  
  {"principal":9.841481527560699,"interest":0.15851847243930065,"balance":5.888191043029245,"month":10},
  
  {"principal":9.940660745137382,"interest":0.05933925486261799,"balance":-4.052469702108137,"month":11}]}


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

class Calculator extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      balance: 10,
      interest_rate: 10,
      [this.props.month]: 20,
      submitted: false,
      data: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (value, name) {
    value = typeof value === 'object' ? value.target.value : value;
    this.setState({[name]: +value});
  };

  handleSubmit(e) {
    e.preventDefault()
    this.setState({submitted: true});

    this.setState({data})
    // axios.post('/payoff', this.state)
    // .then(function (response) {
    //   this.setState(response)
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });  
  };

  render () {
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
            handleChange={this.handleChange} />
          <FormGroupInstance 
            label={'Current monthly payment ($)'} 
            name={this.props.month} 
            value={this.state[this.props.month]} 
            handleChange={this.handleChange} />

          <FormGroup>
            <Col xs={4} className='submit'>
              <Button type="submit" bsStyle="primary" >
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


