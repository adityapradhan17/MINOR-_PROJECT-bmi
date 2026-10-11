import React from "react";
import { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calculateBmi = (event) => {
    event.preventDefault();

    const parsedWeight = Number(weight);
    const parsedHeight = Number(height);

    if (!weight || !height || parsedWeight <= 0 || parsedHeight <= 0) {
      setBmi("");
      setMessage("Please enter valid weight and height values 😵");
      return;
    }

    const bmiValue = parsedWeight / ((parsedHeight / 100) ** 2);
    const formattedBmi = bmiValue.toFixed(1);
    setBmi(formattedBmi);

    if (bmiValue < 18.5) {
      setMessage("You are underweight 😬");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage("You are healthy 😎");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage("You are overweight 🤦‍♀️");
    } else {
      setMessage("You are obese 😱");
    }
  };

  const resetForm = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI CALCULATOR</h2>

        <form onSubmit={calculateBmi}>
          <div>
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              id="weight"
              min="1"
              step="0.1"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="height">Height (cm):</label>
            <input
              type="number"
              id="height"
              min="1"
              step="0.1"
              placeholder="Enter height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="btn-row">
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="button" onClick={resetForm}>
              Reset
            </button>
          </div>

          <div className="center">
            {bmi && <h3>Your BMI is: {bmi}</h3>}
            {message && <p>{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
