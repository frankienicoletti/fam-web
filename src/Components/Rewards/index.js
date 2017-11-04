import React, { Component } from 'react';
import './style.css';
import { numberWithCommas } from '../../utils/numberWithCommas';

export default (props) => {
  const amount = numberWithCommas(props.amount);

  return (
    <div className="Rewards">
      <span className="reward col-xs-8">{props.reward}</span>
      <span className="amount col-xs-2">{amount}</span>
    </div>
  );
}
