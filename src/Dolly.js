import { useEffect } from "react";

const Dolly = () => {
  useEffect(() => {
    document.getElementById("ninetofive").src = "https://www.youtube.com/embed/Lq1JD-bcGTo?controls=0&autoplay=1"
  })
  return (
    <div className="App">
      <iframe id="ninetofive" width="692" height="389" src="https://www.youtube.com/embed/Lq1JD-bcGTo?controls=0" title="Dolly Parton - 9 To 5 (Lyrics)" frameBorder="0" allow="autoplay" allowfullscreen></iframe>
    </div>
  )
}

export default Dolly;