import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";

const Tim = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/congratulations")
    }, 180000)
  })
  return (
    <div className="App" style={{flexDirection: "column"}}>
      <YouTube videoId="EMlhAds4PWg" onReady={(e) => {
        e.target.playVideo()
        return e.target.unMute()
      }} />
      <div id="hack-div" onClick={() => navigate("/i_apologize")}></div>
      <h1>{`Choose how you will suffer for the next 3 minutes :)`}</h1>
    </div>
  )
}

export default Tim;