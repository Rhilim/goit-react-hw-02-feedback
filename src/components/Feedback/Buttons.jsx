import { Component } from 'react';

export class Buttons extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  handleClick = type => {
    
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
  };
  
  countPositiveFeedbackPercentage = () =>{
    const stateSum = this.state.good + this.state.neutral + this.state.bad;
    if(stateSum === 0) {
      return 0;
    }
return Number(this.state.good/stateSum*100).toFixed(0);
  }
  
  render() {
    return (
      <>
        <button onClick={() => this.handleClick('good')}> Good </button>
        <button onClick={() => this.handleClick('neutral')}> Neutral </button>
        <button onClick={() => this.handleClick('bad')}> Bad </button>
        <h2> Statistics </h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </>
    );
  }
}
