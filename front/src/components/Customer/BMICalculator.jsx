import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weightUnit, setWeightUnit] = useState('kg');

  const calculateBMI = () => {
    if (!height || !weight) {
      alert('Please enter both height and weight');
      return;
    }

    let heightInMeters = parseFloat(height);
    let weightInKg = parseFloat(weight);

    // Convert height to meters if in cm
    if (heightUnit === 'cm') {
      heightInMeters = heightInMeters / 100;
    }

    // Convert weight to kg if in lbs
    if (weightUnit === 'lbs') {
      weightInKg = weightInKg * 0.453592;
    }

    const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);

    // Determine BMI category
    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setCategory('Normal Weight');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  const getBmiColor = () => {
    if (!bmi) return '';
    if (bmi < 18.5) return '#3498db'; // Blue
    if (bmi < 25) return '#2ecc71'; // Green
    if (bmi < 30) return '#f39c12'; // Orange
    return '#e74c3c'; // Red
  };

  return (
    <div className="bmi-container">
      <div className="bmi-card">
        <h2>BMI Calculator</h2>
        <p className="subtitle">Calculate Your Body Mass Index</p>

        <div className="input-group">
          <label>Height</label>
          <div className="input-row">
            <input
              type="number"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <select value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
              <option value="cm">CM</option>
              <option value="m">M</option>
              <option value="ft">FT</option>
            </select>
          </div>
        </div>

        <div className="input-group">
          <label>Weight</label>
          <div className="input-row">
            <input
              type="number"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <select value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
              <option value="kg">KG</option>
              <option value="lbs">LBS</option>
            </select>
          </div>
        </div>

        <button className="calculate-btn" onClick={calculateBMI}>
          Calculate BMI
        </button>

        {bmi && (
          <div className="result-container">
            <div className="bmi-result" style={{ borderColor: getBmiColor() }}>
              <div className="bmi-value" style={{ color: getBmiColor() }}>
                {bmi}
              </div>
              <div className="bmi-category" style={{ backgroundColor: getBmiColor() }}>
                {category}
              </div>
            </div>

            <div className="bmi-chart">
              <div className="chart-bar">
                <div className="underweight">Underweight</div>
                <div className="normal">Normal</div>
                <div className="overweight">Overweight</div>
                <div className="obese">Obese</div>
              </div>
              <div className="chart-scale">
                <span>0</span>
                <span>18.5</span>
                <span>25</span>
                <span>30</span>
                <span>40+</span>
              </div>
            </div>

            <div className="bmi-info">
              <h3>BMI Categories:</h3>
              <ul>
                <li><strong>Underweight:</strong> BMI less than 18.5</li>
                <li><strong>Normal Weight:</strong> BMI 18.5 - 24.9</li>
                <li><strong>Overweight:</strong> BMI 25 - 29.9</li>
                <li><strong>Obese:</strong> BMI 30 and above</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
