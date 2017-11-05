import React, { Component } from 'react';
import './styles.css';

import ReactHighcharts from 'react-highcharts'

const ChartComponent = (props) => {
  const data = props.data;

  const config = {
    chart: {
      width: 370,
      marginTop: 50,
    },
    title: {
      text: null
    },
    yAxis: {
      title: null
    },
    xAxis: {
      categories: data.graph.map(el => el.month)
    },
    series: [{
      name: 'principal',
      data: data.graph.map(el => el.principal)
    },{
      name: 'interest',
      data: data.graph.map(el => el.interest)
    },{
      name: 'balance',
      data: data.graph.map(el => el.balance)
    }]
  };
  
  return (
    <ReactHighcharts config={config} />
  );
}

export default ChartComponent;