import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Portal } from '../../components';
import { NavLink } from 'react-router-dom';
import './styles.css';

const CheckList = props => {
  return (
    <Col xs={12} className="modal-checklist">
      <i className="fa fa-check-square" aria-hidden="true"/>
      <span className="checklist-text">{props.text}</span>
    </Col>
  );
};

// Move to another file
class RewardsModal extends React.Component {
  render() {
    return (
      <Portal>
        <div className="rewards-modal-wrapper">
          <div className="rewards-modal">
            <h2 className="rewards-congratulations">Congratulations!</h2>
            <div className="reward-icon">
              <img className="rewards-icon-image" src={this.props.image} alt="icon"/>
            </div>
            <Row className="checklist no-margin">
              <CheckList text="You paid on Time"/>
              <CheckList text="You earned 30 points"/>
              <CheckList text="Your credit score improved by 2 points"/>
            </Row>
            <div className="rewards-button-group">
              <Button
                bsStyle="success"
              >
                <NavLink to="/rewards">
                  See rewards
                </NavLink>
              </Button>
              <Button
                bsStyle="danger"
                onClick={this.props.onClick}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </Portal>
    );
  }
}

export default RewardsModal;
