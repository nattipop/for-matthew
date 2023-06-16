import { useState } from "react";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";

const Jolene = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState();

  setTimeout(() => {
    setMessage("Halfway there!!")
  }, 90000)
  setTimeout(() => {
    navigate("/congratulations")
  }, 180000)
  
  return (
    <div className="App" style={{flexDirection: "column"}}>
      <YouTube videoId="TGaZpJw5Qg0" onReady={(e) => e.target.playVideo()} />
      <div id="hack-div" onClick={() => navigate("/i_apologize")}></div>
      <img width="100px" src="https://media2.giphy.com/media/H7lnI5XnczdCafxaZL/200w.gif" alt="" />
      <h1 className="messages">{`Choose how you will suffer for the next 3 minutes :)`}</h1>
      <h1 className="messages">{message}</h1>
    </div>
  )
}

export default Jolene;