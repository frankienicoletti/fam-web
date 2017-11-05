import React from 'react';
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
      categories: data.map(el => el.month)
    },
    series: [{
      name: 'principal',
      data: data.map(el => el.principal)
    },{
      name: 'interest',
      data: data.map(el => el.interest)
    },{
      name: 'balance',
      data: data.map(el => el.balance)
    }]
  };
  
  return (
    <ReactHighcharts config={config} />
  );
}

export default ChartComponent;