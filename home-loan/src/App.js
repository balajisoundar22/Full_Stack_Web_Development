import './App.css';
import { useState } from 'react';

export function Header() {
  return(
    <h1>Home Loan Down payment Tenure Calculator</h1>
  );
}

function App() {

  const [annualSalary, setAnnualSalary] = useState('');
  const [portionSaved, setPortionSaved] = useState('');
  const [totalCost, setTotalCost] = useState('');
  const [months, setMonths] = useState(null);

  const calculateMonths = () => {
    const monthlySalary = annualSalary / 12;
    const monthlySavings = monthlySalary * portionSaved;
    const downPayment = totalCost * 0.25;
    const monthsToSave = Math.ceil(downPayment / monthlySavings);

    setMonths(monthsToSave);
  };

  return (
    <div>
      <label>
        Annual Salary:
        <input
          type="number"
          value={annualSalary}
          onChange={(e) => setAnnualSalary(Number(e.target.value))}
        />
      </label>
      <label>
        Portion Saved (decimal):
        <input
          type="number"
          step="0.01"
          value={portionSaved}
          onChange={(e) => setPortionSaved(Number(e.target.value))}
        />
      </label>
      <label>
        Total Cost of Dream Home:
        <input
          type="number"
          value={totalCost}
          onChange={(e) => setTotalCost(Number(e.target.value))}
        />
      </label>
      <button onClick={calculateMonths}>Calculate</button>
      {months !== null && <p>Months to save: {months}</p>}
    </div>
  );
}

export default App;
