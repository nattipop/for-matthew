import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import tim from "./photos/IMG_4988.png"
import { useState } from "react";

const DTTG = () => {
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
      <YouTube videoId="-vn6QdqxK3g" onReady={(e) => e.target.playVideo()} />
      <div id="hack-div" onClick={() => navigate("/jolene")}></div>
      <img width="100px" alt="" className="little-tim" src={tim} />
      <h1 className="messages">{`Choose how you will suffer for the next 3 minutes :)`}</h1>
      <h1 className="messages">{message}</h1>
    </div>
  )
}

export default DTTG;