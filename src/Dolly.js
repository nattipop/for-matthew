import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dolly = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById("ninetofive").src = "https://www.youtube.com/embed/Lq1JD-bcGTo?controls=0&autoplay=1&mute=0";

    setTimeout(() => {
      navigate("/congratulations")
    }, 180000)
  })
  return (
    <div className="App" style={{flexDirection: "column"}}>
      <iframe id="ninetofive" width="250vw" height="auto" src="https://www.youtube.com/embed/Lq1JD-bcGTo?controls=0&mute=1" title="Dolly Parton - 9 To 5 (Lyrics)" frameBorder="0" allow="autoplay playsinline" allowFullScreen></iframe>
      <div id="hack-div" onClick={() => navigate("/i_still_love_you")}></div>
      <h1>{`Choose how you will suffer for the next 3 minutes :)`}</h1>
    </div>
  )
}

export default Dolly;