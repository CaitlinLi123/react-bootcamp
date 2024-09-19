import "./App.css";
import { useState, useEffect } from "react";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("USD");
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    function () {
      const controller = new AbortController();
      async function convert() {
        setIsLoading(true);
        try {
          if (from === to) return setValue(amount);
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
          );
          if (!res) throw new Error("cannot get the response");
          const val = await res.json();
          setValue(val.rates[to]);
        } catch (err) {
          setValue(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      convert();
      return function () {
        //aborts the last request when a new request begins
        controller.abort();
      };
    },
    [amount, from, to]
  );

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <select
          onChange={(e) => {
            setFrom(e.target.value);
          }}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select
          onChange={(e) => {
            setTo(e.target.value);
          }}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <p>{isLoading ? "LOADING..." : `${value} ${to}`}</p>
      </div>
    </div>
  );
}

export default App;
