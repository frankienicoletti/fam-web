import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap';
import { Title, Footer } from './components';
// pages
import Statements from './Pages/Statements';

class App extends Component {
  render() {
    return (
      <div className="app container">
        <div className="app-header">
          <Title title="Accounts"/>
        </div>
        <Row className="app-body">
          <Col xs={12} className="app-body-wrapper">
            <Statements/>
          </Col>
        </Row>
        <div className="app-footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
