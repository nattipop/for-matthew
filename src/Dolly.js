import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";

const Dolly = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  
  useEffect(() => {
    document.body.style.backgroundColor = "#282c34";
  }, [])

  setTimeout(() => {
    setMessage("Halfway there!!")
  }, 90000)

  setTimeout(() => {
    navigate("/congratulations")
  }, 180000)

  return (
    <div className="App" style={{flexDirection: "column"}}>
      <YouTube videoId="Lq1JD-bcGTo" onReady={(e) => e.target.playVideo()} />
      <div id="hack-div" onClick={() => navigate("/i_still_love_you")}></div>
      <img width="100px" src="https://media3.giphy.com/media/LO3KoshGSA7cnzRZp8/source.gif" alt="" />
      <h1 className="messages">{`Choose how you will suffer for the next 3 minutes :)`}</h1>
      <h1 className="messages">{message}</h1>
    </div>
  )
}

export default Dolly;