import React, { Component } from 'react';
import { Portal } from '../Portal';
import MyPortal from "../Portal/index";
import { Row, Col } from 'react-bootstrap';
import './styles.css';

const TriviaTitle = props => {
  return (
    <div className="trivia-title">
      <p>{props.title}</p>
    </div>
  );
};

const TriviaQuestion = props => {
  return (
    <div className="trivia-questions">
      <p>
        {props.question}
      </p>
    </div>
  );
};

const TriviaButtons = props => {
  const answer1 = props.answers[0];
  const answer2 = props.answers[1];
  const answer3 = props.answers[2];
  const answer4 = props.answers[3];
  return (
    <div className="trivia-buttons">
      <button onClick={answer1.callback}>
        {answer1.title}
      </button>
      <button onClick={answer2.callback}>
        {answer2.title}
      </button>
      <button onClick={answer3.callback}>
        {answer3.title}
      </button>
      <button onClick={answer4.callback}>
        {answer4.title}
      </button>
    </div>
  );
};

class TriviaModal extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestionNo: 0,
      correctAnswers: 0,
      questions: [
        {
          title: 'Trivia Questions',
          question: 'Which of the following service providers may use credit scores to decide whether a person can buy a service and/or what price he or she will pay?',
          answers: [
            {
              title: 'Electric utility',
              callback: this.incorrectAnswer,
            },
            {
              title: 'Landlord',
              callback: this.incorrectAnswer,
            },
            {
              title: 'Credit card issuer',
              callback: this.incorrectAnswer,
            },
            {
              title: 'All Of The Above',
              callback: this.correctAnswer,
            },
          ]
        },
        {
          title: 'Trivia Questions',
          question: 'Who collects the information on which credit scores are most frequently based?\n' +
          'FICO and VantageScore Solutions?',
          answers: [
            {
              title: 'Experian, Equifax, and TransUnion',
              callback: this.correctAnswer,
            },
            {
              title: 'Individual lenders',
              callback: this.incorrectAnswer,
            },
            {
              title: 'Federal government',
              callback: this.incorrectAnswer,
            },
            {
              title: 'All of the above',
              callback: this.incorrectAnswer,
            }
          ]
        },
        {
          title: 'Trivia Questions',
          question: 'Which of the following does a credit score mainly indicate?',
          // *Risk of not repaying the loan*
          answers: [
            {
              title: 'Knowledge of consumer credit',
              callback: this.incorrectAnswer,
            },
            {
              title: 'Attitude toward consumer credit',
              callback: this.incorrectAnswer,
            },
            {
              title: 'Amount of consumer debt',
              callback: this.incorrectAnswer,
            },
            {
              title: 'Risk of not repaying the loan',
              callback: this.correctAnswer,
            }
          ]
        },
      ]
    };
  }

  renderStars = () => {
    const correctAnswers = this.state.correctAnswers;
    if (correctAnswers === 0) {
      return null;
    }
    if (correctAnswers === 1) {
      return (
        <i className="fa fa-star" aria-hidden="true"/>
      );
    }
    if (correctAnswers === 2) {
      return (
        [
          <i key={1} className="fa fa-star" aria-hidden="true"/>,
          <i key={2} className="fa fa-star" aria-hidden="true"/>
        ]
      );
    }
    if (correctAnswers === 3) {
      return [
        <i key={3} className="fa fa-star" aria-hidden="true"/>,
        <i key={4} className="fa fa-star" aria-hidden="true"/>,
        <i key={5} className="fa fa-star" aria-hidden="true"/>
      ]
    }
  };

  correctAnswer = () => {
    this.setState({
      currentQuestionNo: this.state.currentQuestionNo + 1,
      correctAnswers: this.state.correctAnswers + 1,
    })
  };

  incorrectAnswer = () => {
    this.setState({
      currentQuestionNo: this.state.currentQuestionNo + 1
    })
  };

  render() {
    const question = this.state.questions[this.state.currentQuestionNo];
    const isLastQuestion = this.state.currentQuestionNo === 3;

    if (isLastQuestion) {
      return (
        <MyPortal>
          <div
            className="trivia-modal"
            onClick={this.props.closeModal}
          >
            You answered {this.state.correctAnswers} correctly!
          </div>
        </MyPortal>
      )
    }

    return (
      <MyPortal>
        <div className="trivia-modal">
          <span
            className="trivia-quit"
            onClick={this.props.closeModal}
          >
            X
          </span>
          <TriviaTitle title={question.title}/>
          <TriviaQuestion question={question.question}/>
          <TriviaButtons answers={question.answers}/>
          <Row className="trivia-status">
            <Col xs={4}>
              <p>{this.state.currentQuestionNo}/3</p>
            </Col>
            <Col xs={8}>
              {this.renderStars()}
            </Col>
          </Row>
        </div>
      </MyPortal>
    );

  }
}

export default TriviaModal;
