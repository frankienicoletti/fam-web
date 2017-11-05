import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, ControlLabel, FormControl, Button, Tabs, Tab } from 'react-bootstrap';
import './styles.css';
import FormInstance from '../Calculator'
import Chart from '../Chart'

class TabsInstance extends Component {  
  render () {
    return (
      <Tabs defaultActiveKey={1} id="Calculator">
        <Tab eventKey={1} title="Total Months">
          <FormInstance month={'total_months'} />
        </Tab>
        <Tab eventKey={2} title="Monthly Payment">
          <FormInstance month={'monthly_payment'} />
        </Tab>
      </Tabs>
    );
  }
}

export default TabsInstance;