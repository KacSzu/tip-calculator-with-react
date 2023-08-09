import "./App.css";
import { useState } from "react";

export default function App() {
  const [pay, setPay] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  function handleResetButton() {
    setPay("");
    setPercentage1(0);
    setPercentage2(0);
  }
  const tip = pay * ((percentage1 + percentage2) / 2 / 100);
  return (
    <div className="App">
      <BillInput onChange={setPay} pay={pay} />
      <SelectProcentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service ?
      </SelectProcentage>
      <SelectProcentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service ?
      </SelectProcentage>
      {pay > 0 && (
        <>
          <BillWithTip tip={tip} pay={pay} />
          <ResetButton pay={pay} onClick={handleResetButton} />
        </>
      )}
    </div>
  );
}

function BillInput({ pay, onChange }) {
  return (
    <div>
      <span>How much was the bill ? </span>
      <input
        value={pay}
        onChange={(e) => onChange(+e.target.value)}
        placeholder="Type your bill"
        type="text"
      ></input>
    </div>
  );
}
function SelectProcentage({ percentage, children, onSelect }) {
  return (
    <div>
      <span>{children} </span>
      <select value={percentage} onChange={(e) => onSelect(+e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was perfect (20%)</option>
      </select>
    </div>
  );
}
function BillWithTip({ pay, tip }) {
  return (
    <h2>
      {""}
      You pay ${pay + tip} (${pay}+ ${tip}){""}
    </h2>
  );
}
function ResetButton({ onClick, pay }) {
  return <button onClick={onClick}>RESTART</button>;
}
