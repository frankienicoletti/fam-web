import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, ControlLabel, FormControl, Button, Tabs, Tab } from 'react-bootstrap';
import './styles.css';

// Using an ES6 transpiler like Babel
import Slider from 'react-rangeslider'

// To include the default styles
import 'react-rangeslider/lib/index.css'

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
      rate: 10,
      payment: 10
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (value, name) {
    value = typeof value == 'object' ? value.target.value : value;
    this.setState({[name]: +value});
  };

  render () {
    
    return (
      <Form horizontal>
        <FormGroupInstance label={'Current loan balance ($)'} name={'balance'} value={this.state.balance} handleChange={this.handleChange} />
        <FormGroupInstance label={'Annual percentage rate (0% to 40%)'} name={'rate'} value={this.state.rate} handleChange={this.handleChange} />
        <FormGroupInstance label={'Current monthly payment ($)'} name={'payment'} value={this.state.payment} handleChange={this.handleChange} />

        <FormGroup>
          <Col xs={4} className='submit'>
            <Button type="submit" bsStyle="primary">
              Calculate
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

const TabsInstance = (props) => {
  return (
    <Tabs defaultActiveKey={1} id="Calculator">
      <Tab eventKey={1} title="Tab 1">
        <FormInstance />
      </Tab>
      <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
      <Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>
    </Tabs>
  );
}


export default TabsInstance;