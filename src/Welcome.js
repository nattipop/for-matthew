import headshot from "./photos/Subject.png"
import spooner from "./photos/IMG_7575 Small.jpeg"
import iceage from "./photos/IMG_7938 Small.jpeg"
import dance from "./photos/IMG_0246 Small.jpeg"
import chess from "./photos/IMG_8313 Small.jpeg"
import chippewa from "./photos/70648946447__F47B5624-F8AC-4CDC-99B6-C9366229FF1D Small.jpeg"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Welcome = ({newMessage}) => {
  const [clicks, setClick] = useState(0);
  const [message, setMessage] = useState("Hi! Click the arrow to see all the pictures");
  const navigate = useNavigate();

  useEffect(() => {
    if(newMessage) {
      setMessage(newMessage)
    } else {
      document.body.style.backgroundColor = "rgb(85, 119, 86)"
    }
  }, [newMessage])
  
  const swipe = () => {
    if(clicks === 0){
      setMessage("April 27th, 2023")
      document.getElementById("first-slide").style.marginLeft = "-350px";
    }
    if(clicks === 1){
      setMessage("May 6th, 2023")
      document.getElementById("first-slide").style.marginLeft = "-700px";
    }
    if(clicks === 2){
      setMessage("May 11th, 2023")
      document.getElementById("first-slide").style.marginLeft = "-1050px";
    }
    if(clicks === 3){
      setMessage("May 18th, 2023")
      document.getElementById("first-slide").style.marginLeft = "-1400px";
    }
    if(clicks === 4){
      setMessage("May 22nd, 2023")
      document.getElementById("first-slide").style.marginLeft = "-1750px";
    }
    if(clicks === 5){
      setMessage("")
      document.getElementById("first-slide").style.marginLeft = "-2100px";
    }
    if(newMessage && clicks > 4){
      setMessage("Love you!")
      document.getElementById("first-slide").style.marginLeft = "50px";
      return setClick(0);
    }
    if(clicks > 5){
      setMessage("Hi")
      document.getElementById("first-slide").style.marginLeft = "50px";
      return setClick(0);
    }

    return setClick(clicks + 1)
  }
  return (
    <div className="App">
      <h3 style={{marginTop: "-500px"}}>{message}</h3>
      <ul id="slides">
        <li id="first-slide" className="slides"><img width="300px" src={headshot} alt="" /></li>
        <li className="slides"><img src={spooner} alt=""/></li>
        <li className="slides"><img src={iceage} alt=""/></li>
        <li className="slides"><img src={dance} alt=""/></li>
        <li className="slides"><img src={chess} alt=""/></li>
        <li className="slides"><img src={chippewa} alt=""/></li>
        <li className="slides"><button style={{margin: "150px 55px"}} onClick={() => navigate("/i_apologize")}>Now Click Here</button></li>
      </ul>
      <div style={{position: "absolute", marginTop: "500px"}}>
        <button onClick={swipe}><img width="50px" src="https://www.freeiconspng.com/thumbs/arrow-icon/arrow-icon--myiconfinder-23.png" alt="" /></button>
      </div>
    </div>
  )
}

export default Welcome