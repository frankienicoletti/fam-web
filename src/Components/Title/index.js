import React, { Component } from 'react';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';

export default (props) => {
  const full = props.title || '';
  const title = full.length > 15 ? full.slice(0,20) + '...' + full.slice(-4) : full;

  return (
    <div className="Title">
      <i className="fa fa-chevron-left back" aria-hidden="true">
      </i>
      <span className="content">{title}</span>
      <i className="fa fa-search search" aria-hidden="true"></i>
    </div>
  );
}
