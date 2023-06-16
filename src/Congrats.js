import { useEffect } from "react"
import d_t_logo from "./photos/Untitled-21 01 Artboard 1.svg"
import { useNavigate } from "react-router-dom"

const Congrats = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById("root").style.backgroundColor = "#080f36";
  }, [])
  return (
    <div className="App" style={{flexDirection: "column"}}>
      <img src={d_t_logo} width="700px" alt="" />
      <img style={{marginLeft: "600px"}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c5b54204-d607-4459-8b5a-8c0765b766c7/deu0db5-9f2cd553-49e9-4a68-9bf8-295f5cbefe18.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1YjU0MjA0LWQ2MDctNDQ1OS04YjVhLThjMDc2NWI3NjZjN1wvZGV1MGRiNS05ZjJjZDU1My00OWU5LTRhNjgtOWJmOC0yOTVmNWNiZWZlMTguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sFPrl0k5eZadg0DgXOAPZO52Mgk7IqO0zcqu00T6wfQ" width="100vw" alt="" />
      <button onClick={() => navigate("/i_love_you")}>Back to slideshow</button>
    </div>
  )
}

export default Congrats