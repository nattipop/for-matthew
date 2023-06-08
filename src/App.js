import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const config = require("./config/dev");

function App() {
  let [inputValue, setInputValue] = useState("");
  let [message, setMessage] = useState("");
  const navigate = useNavigate();
  
  const answerChecker = () => {
    const lowercase = inputValue.toLowerCase();
    if(lowercase === config.securityqanswer) {
      document.body.style.backgroundColor = "rgb(149, 188, 149)"
      return navigate("/i_love_you")
    } else {
      document.body.style.backgroundColor = "red";
      setInputValue("");
      return setMessage("Wrong!")
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Hello!</h1>
        <h3>Before we get started, a security question:</h3>
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
