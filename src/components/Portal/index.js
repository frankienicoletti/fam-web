import React from 'react';
import { Portal } from 'react-portal';
import './styles.css';

class MyPortal extends React.Component {
  render() {
    return (
      <Portal>
        <div
          onClick={this.props.onClick}
          className="app-portal"
        >
          {this.props.children}
        </div>
      </Portal>
    );
  }
}

export default MyPortal;
