import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap';
import { Title, Footer } from './components';
import {
  BrowserRouter,
  Route,
  withRouter
} from 'react-router-dom'
// pages
import Accounts from './Pages/Accounts';
import Statements from './Pages/Statements';
import Rewards from './Pages/Rewards';
import Calculator from './Pages/Calculator';
import Confirmation from './Pages/Confirmation/index';
import { getAccount } from './api';

const TitleWithProps = withRouter(Title);

class App extends Component {
  constructor() {
    super();
    this.state = {
      appState: {
        userId: 1, //no login screen so we simulate the authentication
        balance: null,
        credit_limit: null,
        due_date: null,
        first_name: null,
        id: null,
        interest_rate: null,
        last_name: null,
        minimum_payment: null,
      }
    };
  }

  componentWillMount() {
    getAccount(this.state.appState.userId)
      .then((res) => {
        this.setState({ appState: { ...this.state.appState, ...res } });
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app container">
          <div className="modal-hook"/>
          <div className="app-header">
            <TitleWithProps/>
          </div>
          <Row className="app-body">
            <Col xs={12} className="app-body-wrapper">
              <Route exact path='/accounts' render={(props) => {
                return <Accounts {...props} balance={this.state.appState.balance}/>
              }}/>
              <Route exact path='/statements' render={(props) => {
                return (
                  <Statements
                    {...props}
                    balance={this.state.appState.balance}
                    userId={this.state.appState.userId}
                  />
                )
              }}/>
              <Route exact path='/confirmation' render={(props) => {
                return (
                  <Confirmation
                    {...props}
                    balance={this.state.appState.balance}
                    userId={this.state.appState.userId}
                    due_date={this.state.appState.due_date}
                    credit_limit={this.state.appState.credit_limit}
                  />
                )
              }}/>
              <Route exact path='/calculator' render={(props) => {
                return <Calculator {...props} userId={this.state.appState.userId}/>
              }}/>
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
