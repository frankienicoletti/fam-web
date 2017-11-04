import React, { Component } from 'react';
import './style.css';

export default (props) => {
  return (
      <div className="Subtitle">
        <p className="content">{props.rewards}</p>
      </div>
  )
};