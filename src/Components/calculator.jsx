import React, { Component } from 'react';
import Buttons from './buttons'; 
import Result from './result'; 
import './calculator.css'; 

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
    };
  }

  handleButtonClick = (value) => {
    switch (value) {
      case 'c':
        this.clearCalculator();
        break;
      case '=':
        this.calculateResult();
        break;
      case '+/-':
        this.toggleSign();
        break;
      default:
        this.addToExpression(value);
        break;
    }
  };

  clearCalculator() {
    this.setState({
      expression: '',
    });
  }

  calculateResult() {
    try {
      const result = eval(this.state.expression);
      if (isNaN(result) || !isFinite(result)) {
        this.setState({
          expression: 'Error',
        });
      } else {
        this.setState({
          expression: result.toString(),
        });
      }
    } catch (error) {
      this.setState({
        expression: 'Error',
      });
    }
  }

  toggleSign() {
    const { expression } = this.state;
    if (expression.length > 0 && expression !== 'Error') {
      this.setState({
        expression: (parseFloat(expression) * -1).toString(),
      });
    }
  }

  addToExpression(value) {
    this.setState((prevState) => ({
      expression: prevState.expression + value,
    }));
  }

  render() {
    return (
      <div className="myCalculator">
        <Result result={this.state.expression} />
        <Buttons handleButtonClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default Calculator;