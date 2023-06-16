import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const config = require("./config/dev");

function App() {
  let [inputValue, setInputValue] = useState("");
  let [message, setMessage] = useState("");
  const navigate = useNavigate();
  
  const answerChecker = (e) => {
    e.preventDefault()
    const lowercase = inputValue.toLowerCase();
    if(lowercase === config.securityqanswer) {
      document.body.style.backgroundColor = "rgb(197, 197, 197)";
      return navigate("/i_love_you")
    } else {
      document.body.style.backgroundColor = "red";
      setInputValue("");
      return setMessage("Wrong!")
    }
  }

  return (
    <div className="App">
      <div className='box'>
        <h3>Security Question:</h3>
        <h3>What does Buttersnaps call me?</h3>
        <form>
          <input id="security-input" type="password" autoComplete="none" placeholder="Type Here" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button onClick={answerChecker}>Submit</button>
        </form>
        <h3>{message}</h3>
      </div>
    </div>
  );
}

export default App;
