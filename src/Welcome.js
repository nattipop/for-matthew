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
  const [message, setMessage] = useState("Hello, Matthew");
  const navigate = useNavigate();
  
  const swipe = () => {
    if(clicks === 0){
      setMessage("I")
      document.getElementById("first-slide").style.animation = "slidermotion 1s"
      document.getElementById("first-slide").style.marginLeft = "-35vw";
    }
    if(clicks === 1){
      setMessage("I Love")
      document.getElementById("first-slide").style.animation = "slidermotion2 1s"
      document.getElementById("first-slide").style.marginLeft = "-115vw";
    }
    if(clicks === 2){
      setMessage("I Love You!")
      document.getElementById("first-slide").style.animation = "slidermotion3 1s"
      document.getElementById("first-slide").style.marginLeft = "-195vw";
    }
    if(clicks === 3){
      document.getElementById("first-slide").style.animation = "slidermotion4 1s"
      document.getElementById("first-slide").style.marginLeft = "-275vw";
    }
    if(clicks === 4){
      document.getElementById("first-slide").style.animation = "slidermotion5 1s"
      document.getElementById("first-slide").style.marginLeft = "-355vw";
    }
    if(clicks === 5){
      document.getElementById("first-slide").style.marginLeft = "-435vw";
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
        <li id="first-slide" className="slides"><img width="200vw" src={headshot} alt="" /></li>
        <li className="slides"><img width="200vw" src={spooner} alt=""/></li>
        <li className="slides"><img width="200vw" src={iceage} alt=""/></li>
        <li className="slides"><img width="200vw" src={dance} alt=""/></li>
        <li className="slides"><img width="200vw" src={chess} alt=""/></li>
        <li className="slides"><img width="200vw" src={chippewa} alt=""/></li>
        <li className="slides" style={{display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "100px"}}><button onClick={() => navigate("/i_apologize")}>Now Click Here</button></li>
      </ul>
      <div style={{position: "fixed", marginTop: "300px"}}>
        <h1>{message}</h1>
        <button onClick={swipe}>Click!</button>
      </div>
    </div>
  )
}

export default Welcome