import s from "./Feedback.module.css";

const Feedback = ({
  goodCom,
  badCom,
  neutralCom,
  totalFeedback,
  totalPercent,
}) => {
  return (
    <>
      <ul className={s.feedbackList}>
        <li>Good: {goodCom}</li>
        <li>Neutral: {neutralCom}</li>
        <li>Bad: {badCom}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {totalPercent}%</li>
      </ul>
    </>
  );
};

export default Feedback;
