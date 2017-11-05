import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, ControlLabel, FormControl, Button, Tabs, Tab } from 'react-bootstrap';
import './styles.css';
import FormInstance from '../Calculator'
import Chart from '../Chart'
import axios from 'axios'

class TabsInstance extends Component {
  constructor (props) {
    super(props);
    this.state = {
      balance: 10,
      interest_rate: 10,
      total_months: 10,
      monthly_payment: 20,
      totalSubmitted: false,
      monthSubmitted:  false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleTotalSubmit = this.handleTotalSubmit.bind(this);
    this.handleMonthSubmit = this.handleMonthSubmit.bind(this);
  }

  handleChange (value, name) {
    value = typeof value == 'object' ? value.target.value : value;
    this.setState({[name]: +value});
  };

  handleTotalSubmit (e) {
    e.preventDefault()
    this.setState({totalSubmitted: true})
    
    const data = {
      balance: this.state.balance,
      interest_rate: this.state.interest_rate,
      total_months: this.state.total_months,  
    }

    axios.post('/payoff', data)
    .then(function (response) {
      this.setState(data)
    })
    .catch(function (error) {
      console.log(error);
    });  
  };

  handleMonthSubmit (e) {
    e.preventDefault()
    const data = {
      balance: this.state.balance,
      interest_rate: this.state.interest_rate,
      monthly_payment: this.state.monthly_payment,
      monthSubmitted: true
    }
    this.setState(data)
  };

  

  render () {
    return (
      <Tabs defaultActiveKey={1} id="Calculator">
        <Tab eventKey={1} title="Total Months">
          {
            this.state.totalSubmitted ? 
              <Chart /> : 
              <FormInstance month={'total_months'} handleSubmit={this.handleTotalSubmit} /> 
          }
          
        </Tab>
        <Tab eventKey={2} title="Monthly Payment">
          {
            this.state.monthSubmitted ? 
              <Chart /> : 
              <FormInstance month={'monthly_payment'} handleSubmit={this.handleMonthSubmit} /> 
          }
        </Tab>
      </Tabs>
    );
  }
}

export default TabsInstance;