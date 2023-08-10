
export const FeedbackOptions = ({options, onLeaveFeedback}) => {

    return (
      <>
        <button onClick={() => onLeaveFeedback('good')}> Good </button>
        <button onClick={() => onLeaveFeedback('neutral')}> Neutral </button>
        <button onClick={() => onLeaveFeedback('bad')}> Bad </button>
      </>
    );
  }