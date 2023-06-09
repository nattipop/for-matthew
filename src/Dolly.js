import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";

const Dolly = () => {
  const navigate = useNavigate();

  const playVideo = (e) => {
    e.target.playVideo()
  }

  useEffect(() => {
    setTimeout(() => {
      navigate("/congratulations")
    }, 180000)
  })
  return (
    <div className="App" style={{flexDirection: "column"}}>
      <YouTube videoId="Lq1JD-bcGTo" onReady={playVideo} />
      <div id="hack-div" onClick={() => navigate("/i_still_love_you")}></div>
      <h1>{`Choose how you will suffer for the next 3 minutes :)`}</h1>
    </div>
  )
}

export default Dolly;