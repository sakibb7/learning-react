import { useState } from "react";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [mytip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const calcTip = (mytip + friendTip) / 2 / 100;
  const totalTip = bill * calcTip;
  const total = bill + totalTip;

  const handleClick = () => {
    setBill("");
    setMyTip(0);
    setFriendTip(0);
  };
  return (
    <div>
      <p>
        How much was the bill?{" "}
        <input
          type="text"
          placeholder="Bill Value"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </p>
      <p>
        How did you like the service?{" "}
        <select
          value={mytip}
          onChange={(e) => setMyTip(Number(e.target.value))}
        >
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>It was Amazing (20%)</option>
        </select>
      </p>

      <p>
        How did your friend like the service?{" "}
        <select
          value={friendTip}
          onChange={(e) => setFriendTip(Number(e.target.value))}
        >
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>It was Amazing (20%)</option>
        </select>
      </p>
      <div>
        {bill && (
          <div>
            <h2>
              You will pay ${total} (${bill} + ${totalTip})
            </h2>

            <button onClick={() => handleClick()}>Reset</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TipCalculator;
