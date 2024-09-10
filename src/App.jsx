import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [counter, setCounter] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("counter")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );

  useEffect(() => {
    window.localStorage.setItem("counter", JSON.stringify(counter));
  }, [counter]);

  const updateFeedback = (feedbackType) => {
    setCounter({ ...counter, [feedbackType]: counter[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setCounter({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = counter.good + counter.bad + counter.neutral;
  const totalPercent = Math.round((counter.good / totalFeedback) * 100);

  return (
    <>
      <Description />

      <Options
        updFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          goodCom={counter.good}
          badCom={counter.bad}
          neutralCom={counter.neutral}
          totalFeedback={totalFeedback}
          totalPercent={totalPercent}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
