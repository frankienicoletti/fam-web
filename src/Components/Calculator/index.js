import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, ControlLabel, FormControl, Button, Tabs, Tab } from 'react-bootstrap';
import './styles.css';

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


const FormInstance = (props) => {
  return (
    <Form horizontal>
      <FormGroup controlId="formHorizontalNumber">
        <Col componentClass={ControlLabel} xs={6}>
          Current loan balance ($)
        </Col>
        <Col xs={6}>
          <FormControl type="number" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} xs={6}>
          Annual percentage rate (0% to 40%)
        </Col>
        <Col xs={6}>
          <FormControl type="" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} xs={6}>
          Current monthly payment ($)
        </Col>
        <Col xs={6}>
          <FormControl type="number" />
        </Col>
      </FormGroup>

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



export default TabsInstance;