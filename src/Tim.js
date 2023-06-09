import { useState } from "react";
import { useNavigate } from "react-router-dom";
import tim from "./photos/IMG_4988.png"
import YouTube from "react-youtube";

const Tim = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  setTimeout(() => {
    setMessage("Halfway there!!")
  }, 90000)
  setTimeout(() => {
    navigate("/congratulations")
  }, 180000)

  return (
    <div className="App" style={{flexDirection: "column"}}>
      <YouTube videoId="EMlhAds4PWg" onReady={(e) => {
        e.target.playVideo()
        return e.target.unMute()
      }} />
      <div id="hack-div" onClick={() => navigate("/dont_take_the_girl")}></div>
      <img className="little-tim" width="100px" src={tim} alt="" />
      <h1 className="messages">{`Choose how you will suffer for the next 3 minutes :)`}</h1>
      <h1 className="messages">{message}</h1>
    </div>
  )
}

export default Tim;