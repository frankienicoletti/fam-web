import React, { Component } from 'react';
import './style.css';

export default (props) => {
  return (
    <div className="Header">
      <span className="content">{props.header}</span>
    </div>
  );
}
