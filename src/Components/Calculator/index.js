import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import FormInstance from '../Form'
import './styles.css';


const TabsInstance = props => {
  return (
    <Tabs defaultActiveKey={1} id="Calculator">
      <Tab eventKey={1} title="Total Months">
        <FormInstance {...props} month={'total_months'}/>
      </Tab>
      <Tab eventKey={2} title="Monthly Payment">
        <FormInstance {...props} month={'monthly_payment'}/>
      </Tab>
    </Tabs>
  );
};

export default TabsInstance;
