import React, { Component } from 'react';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom';
import { TriviaModal } from "../../components";

class Title extends Component {
  constructor() {
    super();
    this.state = {
      showTrivia: false,
    };
  }

  showModal = () => {
    this.setState({ showTrivia: true });
  };

  hideModal = () => {
    this.setState({ showTrivia: false });
  };

  render() {
    const { props } = this;
    const full = props.location && (props.location.pathname.slice(1) || '');
    const title = full.length > 15 ? full.slice(0, 20) + '...' + full.slice(-4) : full;
    // Render Modal

    return (
      [this.state.showTrivia && <TriviaModal key="1" closeModal={this.hideModal}/>,
        <div key="2" className="Title">
          <NavLink to="/accounts">
            <i className="fa fa-chevron-left back" aria-hidden="true"/>
          </NavLink>
          <span className="content">{title}</span>
          <i onClick={this.showModal} className="fa fa-gift search" aria-hidden="true"/>
        </div>
      ]
    );
  }
}

export default Title;
