import s from "./Options.module.css";

const Options = ({ updFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={s.wrapper}>
      <button className={s.button} onClick={() => updFeedback("good")}>
        Good
      </button>

      <button className={s.button} onClick={() => updFeedback("neutral")}>
        Neutral
      </button>

      <button className={s.button} onClick={() => updFeedback("bad")}>
        Bad
      </button>

      {totalFeedback > 0 ? (
        <button className={s.button} onClick={resetFeedback}>
          Reset
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Options;
