import React from 'react';
import { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Feedback/Section';
import { Statistics } from './Feedback/Statistics';

export class App extends Component {
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

  countPositiveFeedbackPercentage = () => {
    const stateSum = this.state.good + this.state.neutral + this.state.bad;
    if (stateSum === 0) {
      return 0;
    }
    return Number((this.state.good / stateSum) * 100).toFixed(0);
  };

  render() {
    return (
      <>
      <Section title="Please leave feedback" children={this.children}>
        <FeedbackOptions
          options={this.state} 
          onLeaveFeedback={this.handleClick}
        />
        </Section>
        <Section title="Statistics" children={this.children}>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
      </>
    );
  }
}
