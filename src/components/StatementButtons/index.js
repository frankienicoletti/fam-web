import React from 'react';
import { ButtonGroup, Button, } from 'react-bootstrap';
import './styles.css';

const StatementButtons = props => {
  return (
    <div className="btn-group-wrapper">
      <ButtonGroup justified>
        <Button className="btn-inactive" href="#">{props.btn1Text}</Button>
        <Button bsStyle="primary" href="#">{props.btn2Text}</Button>
      </ButtonGroup>
    </div>
  );
};

export default StatementButtons;