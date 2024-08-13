import { useState } from "react";

const Counter = () => {
  //the gap, i.e step = 5, count = 1 ==> 5 days from today
  const [step, setStep] = useState(0);

  //how many days from today
  const [count, setCount] = useState(0);

  const day = new Date();
  day.setDate(day.getDate() + count * step);

  return (
    <>
      <div>
        <div>
          <button
            onClick={() => {
              setStep((prev) => prev - 1);
            }}
          >
            -
          </button>
          Step:{step}
          <button
            onClick={() => {
              setStep((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>
        <button
          onClick={() => {
            setCount((prev) => prev - step);
          }}
        >
          -
        </button>
        Count:{count}
        <button
          onClick={() => {
            setCount((prev) => prev + step);
          }}
        >
          +
        </button>
      </div>
      <div>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count * step} days from today is `
          : `${count * step} days ago was `}
        {day.toDateString()}
      </div>
    </>
  );
};
export default Counter;
