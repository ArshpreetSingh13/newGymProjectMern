import { useState } from "react";

export default function BMICalculator() {
  const [unit, setUnit] = useState("metric");
  const [form, setForm] = useState({
    age: "", gender: "", weight: "", height: "", goal: "", activity: "",
  });
  const [calories, setCalories] = useState(null);
  const [bmi, setBmi] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculate = () => {
    const age = parseInt(form.age);
    const weight = parseFloat(form.weight);
    let height = parseFloat(form.height);

    if (!age || !weight || !height || !form.gender || !form.activity || !form.goal) {
      alert("Please fill all fields!");
      return;
    }

    // Convert imperial to metric if needed
    const weightKg = unit === "imperial" ? weight * 0.453592 : weight;
    const heightCm = unit === "imperial" ? height * 2.54 : height;
    const heightM = heightCm / 100;

    // BMI
    const bmiVal = (weightKg / (heightM * heightM)).toFixed(1);
    setBmi(bmiVal);

    // BMR (Mifflin-St Jeor)
    let bmr;
    if (form.gender === "male") {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
    }

    // Activity multiplier
    const activityMap = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9,
    };
    let tdee = bmr * (activityMap[form.activity] || 1.2);

    // Goal adjustment
    if (form.goal === "lose") tdee -= 500;
    else if (form.goal === "gain") tdee += 500;

    setCalories(Math.round(tdee));
  };

  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) return { label: "Underweight", color: "#3498db" };
    if (bmi < 25) return { label: "Normal", color: "#2ecc71" };
    if (bmi < 30) return { label: "Overweight", color: "#f39c12" };
    return { label: "Obese", color: "#e74c3c" };
  };

  const inputStyle = {
    border: "1px solid #ccc", borderRadius: 4, padding: "10px 14px",
    fontSize: 14, width: "100%", outline: "none", background: "#fff",
    color: "#333",
  };

  return (
    <div className="row g-0" style={{ border: "1px solid #ddd", borderRadius: 10, overflow: "hidden" }}>

      {/* Left - Form */}
      <div className="col-lg-9 p-4" style={{ background: "#f5f5f5" }}>
        <div className="row g-3">

          {/* Age */}
          <div className="col-md-6">
            <input
              style={inputStyle} type="number" name="age"
              placeholder="Age" value={form.age} onChange={handleChange}
            />
          </div>

          {/* Gender */}
          <div className="col-md-6">
            <select style={inputStyle} name="gender" value={form.gender} onChange={handleChange}>
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Weight */}
          <div className="col-md-6">
            <input
              style={inputStyle} type="number" name="weight"
              placeholder={unit === "metric" ? "Weight (kgs)" : "Weight (lbs)"}
              value={form.weight} onChange={handleChange}
            />
          </div>

          {/* Height */}
          <div className="col-md-6">
            <input
              style={inputStyle} type="number" name="height"
              placeholder={unit === "metric" ? "Height (cm)" : "Height (inches)"}
              value={form.height} onChange={handleChange}
            />
          </div>

          {/* Goal */}
          <div className="col-md-6">
            <select style={inputStyle} name="goal" value={form.goal} onChange={handleChange}>
              <option value="">Goal</option>
              <option value="lose">Lose Weight</option>
              <option value="maintain">Maintain Weight</option>
              <option value="gain">Gain Muscle</option>
            </select>
          </div>

          {/* Activity */}
          <div className="col-md-6">
            <select style={inputStyle} name="activity" value={form.activity} onChange={handleChange}>
              <option value="">Activity Level</option>
              <option value="sedentary">Sedentary (little/no exercise)</option>
              <option value="light">Light (1-3 days/week)</option>
              <option value="moderate">Moderate (3-5 days/week)</option>
              <option value="active">Active (6-7 days/week)</option>
              <option value="very_active">Very Active (twice/day)</option>
            </select>
          </div>

          {/* Calculate + Toggle */}
          <div className="col-12 d-flex align-items-center justify-content-between flex-wrap gap-3 mt-2">
            <button
              className="btn btn-primary text-uppercase fw-bold px-4 py-2"
              onClick={calculate}
            >
              Calculate
            </button>

            <div className="d-flex align-items-center gap-2">
              <span className={`fw-semibold ${unit === "metric" ? "text-dark" : "text-muted"}`}>Metric</span>
              <div
                onClick={() => {
                  setUnit(unit === "metric" ? "imperial" : "metric");
                  setForm({ age: "", gender: "", weight: "", height: "", goal: "", activity: "" });
                  setCalories(null); setBmi(null);
                }}
                style={{
                  width: 44, height: 24, borderRadius: 12, cursor: "pointer",
                  background: unit === "imperial" ? "#c0392b" : "#aaa",
                  position: "relative", transition: "background 0.3s",
                }}
              >
                <div style={{
                  width: 18, height: 18, borderRadius: "50%", background: "#fff",
                  position: "absolute", top: 3,
                  left: unit === "imperial" ? 23 : 3,
                  transition: "left 0.3s",
                }} />
              </div>
              <span className={`fw-semibold ${unit === "imperial" ? "text-dark" : "text-muted"}`}>Imperial</span>
            </div>
          </div>

        </div>
      </div>

      {/* Right - Result */}
      <div
        className="col-lg-3 d-flex flex-column align-items-center justify-content-center p-4 text-center"
        style={{ background: "#ececec", borderLeft: "1px solid #ddd" }}
      >
        <p className="text-uppercase fw-bold mb-3" style={{ fontSize: 13, letterSpacing: 1 }}>
          Target Daily Caloric Intake
        </p>

        {calories ? (
          <>
            <h2 className="fw-bold text-primary mb-1">{calories}</h2>
            <p className="text-muted mb-3" style={{ fontSize: 13 }}>kcal / day</p>
            <div style={{
              background: getBmiCategory(bmi).color, color: "#fff",
              borderRadius: 6, padding: "6px 16px", fontSize: 13, fontWeight: 600,
            }}>
              BMI {bmi} — {getBmiCategory(bmi).label}
            </div>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: 60, color: "#555" }}>?</h1>
            <p className="text-muted" style={{ fontSize: 13 }}>These calculations are based on averages.</p>
          </>
        )}
      </div>

    </div>
  );
}