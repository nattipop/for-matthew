import headshot from "./photos/Subject.png"
import headshot2 from "./photos/Subject 2.png"
import headshot3 from "./photos/Subject 3.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Welcome = () => {
  const [clicks, setClick] = useState(0);
  const [message, setMessage] = useState("Hello, Matthew");
  const navigate = useNavigate();
  
  const swipe = () => {
    if(clicks === 0){
      setMessage("I")
      document.getElementById("first-slide").style.marginLeft = "-450px";
    }
    if(clicks === 1){
      setMessage("I Love")
      document.getElementById("first-slide").style.marginLeft = "-900px";
    }
    if(clicks === 2){
      setMessage("I Love You!")
      document.getElementById("first-slide").style.marginLeft = "-1370px";
    }
    if(clicks > 2){
      document.getElementById("first-slide").style.marginLeft = "0px";
      return setClick(0);
    }

    return setClick(clicks + 1)
  }
  return (
    <div className="App">
      <ul id="slides">
        <li id="first-slide" className="slides"><img width="450px" src={headshot} alt="" /></li>
        <li className="slides"><img width="410px" src={headshot2} alt=""/></li>
        <li className="slides"><img width="490px" src={headshot3} alt=""/></li>
        <li className="slides" style={{display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "100px"}}><button onClick={() => navigate("/i_apologize")}>Now Click Here</button></li>
      </ul>
      <div style={{position: "fixed", marginLeft: "450px"}}>
        <h1>{message}</h1>
        <button onClick={swipe}>Click!</button>
      </div>
    </div>
  )
}

export default Welcome