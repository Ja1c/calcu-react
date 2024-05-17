import { useState } from 'react';
import './App.css';

function App() {
  const [output, setOutput] = useState('');

  // Function to calculate based on button clicked
  const calculate = (btnValue) => {
    if (btnValue === '=') {
      // Calculate result when "=" button is clicked
      let result;
      try {
        result = eval(output.replace('%', '/100'));
      } catch (error) {
        result = 'Error';
      }
      setOutput(result.toString());
    } else if (btnValue === 'AC') {
      // Clear the output when "AC" button is clicked
      setOutput('');
    } else if (btnValue === 'DEL') {
      // Delete the last character when "DEL" button is clicked
      setOutput((prevOutput) => prevOutput.slice(0, -1));
    } else {
      // Append the button value to the output
      setOutput((prevOutput) => prevOutput + btnValue);
    }
  };

  // Function to handle button clicks
  const handleClick = (e) => {
    const btnValue = e.target.dataset.value;
    calculate(btnValue);
  };

  return (
    <div className="container">
      <input type="text" className="display" value={output} readOnly />

      <div className="buttons">
        <button onClick={handleClick} data-value="AC">AC</button>
        <button onClick={handleClick} data-value="DEL">DEL</button>
        <button onClick={handleClick} data-value="%">%</button>
        <button onClick={handleClick} data-value="/">/</button>

        <button onClick={handleClick} data-value="7">7</button>
        <button onClick={handleClick} data-value="8">8</button>
        <button onClick={handleClick} data-value="9">9</button>
        <button onClick={handleClick} data-value="*">*</button>

        <button onClick={handleClick} data-value="4">4</button>
        <button onClick={handleClick} data-value="5">5</button>
        <button onClick={handleClick} data-value="6">6</button>
        <button onClick={handleClick} data-value="-">-</button>

        <button onClick={handleClick} data-value="1">1</button>
        <button onClick={handleClick} data-value="2">2</button>
        <button onClick={handleClick} data-value="3">3</button>
        <button onClick={handleClick} data-value="+">+</button>

        <button onClick={handleClick} data-value="0">0</button>
        <button onClick={handleClick} data-value="00">00</button>
        <button onClick={handleClick} data-value=".">.</button>
        <button onClick={handleClick} data-value="=">=</button>
      </div>
    </div>
  );
}

export default App;
