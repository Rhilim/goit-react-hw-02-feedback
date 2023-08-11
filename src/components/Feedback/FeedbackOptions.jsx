import { FeedbackOptionsS } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  
    return (
      <>
        <FeedbackOptionsS onClick={() => onLeaveFeedback('good')}> Good </FeedbackOptionsS>
        <FeedbackOptionsS onClick={() => onLeaveFeedback('neutral')}> Neutral </FeedbackOptionsS>
        <FeedbackOptionsS onClick={() => onLeaveFeedback('bad')}> Bad </FeedbackOptionsS>
      </>
    );
  }


