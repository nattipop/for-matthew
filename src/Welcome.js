import headshot from "./photos/Subject.png"
import spooner from "./photos/IMG_7575 Small.jpeg"
import iceage from "./photos/IMG_7938 Small.jpeg"
import dance from "./photos/IMG_0246 Small.jpeg"
import chess from "./photos/IMG_8313 Small.jpeg"
import chippewa from "./photos/70648946447__F47B5624-F8AC-4CDC-99B6-C9366229FF1D Small.jpeg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Welcome = () => {
  const [clicks, setClick] = useState(0);
  const [message, setMessage] = useState("First");
  const navigate = useNavigate();
  
  const swipe = () => {
    if(clicks === 0){
      setMessage("First of")
      document.getElementById("first-slide").style.marginLeft = "-350px";
    }
    if(clicks === 1){
      setMessage("First of all,")
      document.getElementById("first-slide").style.marginLeft = "-700px";
    }
    if(clicks === 2){
      setMessage("First of all, I")
      document.getElementById("first-slide").style.marginLeft = "-1050px";
    }
    if(clicks === 3){
      setMessage("First of all, I love")
      document.getElementById("first-slide").style.marginLeft = "-1400px";
    }
    if(clicks === 4){
      setMessage("First of all, I love you!")
      document.getElementById("first-slide").style.marginLeft = "-1750px";
    }
    if(clicks === 5){
      document.getElementById("first-slide").style.marginLeft = "-2100px";
    }
    if(clicks > 5){
      document.getElementById("first-slide").style.marginLeft = "0px";
      return setClick(0);
    }

    return setClick(clicks + 1)
  }
  return (
    <div className="App">
      <ul id="slides">
        <li id="first-slide" className="slides"><img src={headshot} alt="" /></li>
        <li className="slides"><img src={spooner} alt=""/></li>
        <li className="slides"><img src={iceage} alt=""/></li>
        <li className="slides"><img src={dance} alt=""/></li>
        <li className="slides"><img src={chess} alt=""/></li>
        <li className="slides"><img src={chippewa} alt=""/></li>
        <li className="slides"><button style={{margin: "150px 55px"}} onClick={() => navigate("/i_apologize")}>Now Click Here</button></li>
      </ul>
      <div style={{position: "fixed", marginTop: "400px"}}>
        <h1>{message}</h1>
        <button onClick={swipe}>Click!</button>
      </div>
    </div>
  )
}

export default Welcome