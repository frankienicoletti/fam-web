import React from 'react';
import classnames from 'classnames';
import { Row, Col } from 'react-bootstrap';
import { numberWithDollarSign } from '../../utils/numberWithCommas';
import './styles.css';

const Details = props => {
  return (
    <Row className="details-wrapper no-margin">
      <Col xs={8}>
        <p className="details-title">{props.title}</p>
        {props.date && <p className="details-date">{props.date}</p>}
      </Col>
      <Col className="details-right-section" xs={4}>
        <p
          className={classnames('details-amount', { 'details-paid': props.paid })}
        >
          {props.amount && numberWithDollarSign(props.amount)}
          {props.children}
        </p>
        {props.pending && <p className="details-pending">
          pending
        </p>}
      </Col>
    </Row>
  );
};

export default Details;
