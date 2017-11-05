import React, { Component } from 'react';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom';

export default (props) => {
  const full = props.location && props.location.pathname.slice(1) || '';
  const title = full.length > 15 ? full.slice(0, 20) + '...' + full.slice(-4) : full;

  return (
    <div className="Title">
      <NavLink to="/account">
        <i className="fa fa-chevron-left back" aria-hidden="true"/>
      </NavLink>
      <span className="content">{title}</span>
      <i className="fa fa-search search" aria-hidden="true"/>
    </div>
  );
}
