import { useState } from "react";

const DateCounter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("june 21 2024");
  date.setDate(date.getDate() + count);

  //v2
  const [nStep, setNStep] = useState(0);
  const [nCount, setNCount] = useState(0);

  const nDate = new Date("june 21 2024");
  nDate.setDate(nDate.getDate() + nCount);

  const handleChange = (e) => {
    setNStep(Number(e.target.value));
  };

  const handleReset = () => {
    setNCount(0);
    setNStep(0);
  };

  return (
    <div>
      <div>
        <p>
          <button onClick={() => step > 1 && setStep(step - 1)}> - </button>{" "}
          Step: {step} <button onClick={() => setStep(step + 1)}> +</button>
        </p>
        <p>
          <button onClick={() => setCount(count - step)}> - </button> Count:{" "}
          {count} <button onClick={() => setCount(count + step)}> + </button>
        </p>
        <p>
          {/* If statement inside and if statement */}
          {count === 0
            ? "Today is"
            : count < 0
            ? `${Math.abs(count)} days ago was`
            : `${count} days from today is `}{" "}
          {date.toDateString()}
        </p>
      </div>

      <div>
        <br />
        <br />
        <h3>Date counter v2</h3>
        <div>
          {/* Range that can i use for product sorting using price min max */}
          <input
            type="range"
            value={nStep}
            onChange={handleChange}
            min={0}
            max={10}
          />
        </div>
        <div>
          <button onClick={() => setNCount(nCount - nStep)}>-</button>
          <input
            type="text"
            value={nCount}
            onChange={(e) => Number(setNCount(e.target.value))}
          />
          <button onClick={() => setNCount(nCount + nStep)}>+</button>
          <p>
            {nCount === 0
              ? "Today is"
              : nCount < 0
              ? `${Math.abs(nCount)} days ago was`
              : `${nCount} days from today is `}{" "}
            {nDate.toDateString()}
          </p>
          {nCount !== 0 || nStep !== 0 ? (
            <button onClick={handleReset}>Reset</button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DateCounter;
