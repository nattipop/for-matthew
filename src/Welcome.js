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
  const [message, setMessage] = useState("Hi");
  const navigate = useNavigate();
  
  const swipe = () => {
    if(clicks === 0){
      setMessage("April 27th, 2023")
      document.getElementById("first-slide").style.marginLeft = "-350px";
      document.getElementById("root").style.backgroundColor = "rgb(116, 130, 255)";
    }
    if(clicks === 1){
      setMessage("May 6th, 2023")
      document.getElementById("first-slide").style.marginLeft = "-700px";
      document.getElementById("root").style.backgroundColor = "rgb(80, 113, 80)";
    }
    if(clicks === 2){
      setMessage("May 11th, 2023")
      document.getElementById("first-slide").style.marginLeft = "-1050px";
      document.getElementById("root").style.backgroundColor = "rgb(213, 197, 166)";
    }
    if(clicks === 3){
      setMessage("May 18th, 2023")
      document.getElementById("first-slide").style.marginLeft = "-1400px";
      document.getElementById("root").style.backgroundColor = "rgb(62, 45, 27)";
    }
    if(clicks === 4){
      setMessage("May 22nd, 2023")
      document.getElementById("first-slide").style.marginLeft = "-1750px";
      document.getElementById("root").style.backgroundColor = "rgb(123, 152, 224)";
    }
    if(clicks === 5){
      setMessage("")
      document.getElementById("first-slide").style.marginLeft = "-2100px";
      document.getElementById("root").style.backgroundColor = "rgb(80, 113, 80)";
    }
    if(clicks > 5){
      setMessage("Hi")
      document.getElementById("first-slide").style.marginLeft = "0px";
      document.getElementById("root").style.backgroundColor = "rgb(197, 197, 197)";
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