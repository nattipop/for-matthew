import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Tim = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById("jtsys").src = "https://www.youtube.com/embed/EMlhAds4PWg?controls=0&autoplay=1&playsinline=1";

    setTimeout(() => {
      navigate("/congratulations")
    }, 180000)
  })
  return (
    <div className="App" style={{flexDirection: "column"}}>
      <iframe id="jtsys" width="250vw" height="auto" src="https://www.youtube.com/embed/EMlhAds4PWg" title="Just To See You Smile" frameBorder="0" allow="autoplay" allowFullScreen></iframe>
      <div id="hack-div" onClick={() => navigate("/i_apologize")}></div>
      <h1>{`Choose which one you will suffer through for 3 minutes :)`}</h1>
    </div>
  )
}

export default Tim;