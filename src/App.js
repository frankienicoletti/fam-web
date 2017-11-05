import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap';
import { Title, Footer } from './components';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
// pages
import Accounts from './Pages/Accounts';
import Statements from './Pages/Statements';
import Rewards from './Pages/Rewards';
import Settings from './Pages/Settings';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app container">
          <div className="app-header">
            <Title title="Accounts"/>
          </div>
          <Row className="app-body">
            <Col xs={12} className="app-body-wrapper">
              <Route exact path="/" component={Accounts}/>
              <Route path="/account" component={Accounts}/>
              <Route path="/accounts" component={Accounts}/>
              <Route path="/statements" component={Statements}/>
              <Route path="/settings" component={Settings}/>
              <Route path="/rewards" component={Rewards}/>
            </Col>
          </Row>
          <div className="app-footer">
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
