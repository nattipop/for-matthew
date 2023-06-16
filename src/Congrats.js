import { useEffect } from "react"
import d_t_logo from "./photos/Untitled-21 01 Artboard 1.svg"
import Welcome from "./Welcome";

const Congrats = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#080f36";
  }, [])
  return (
    <div className="App" style={{flexDirection: "column", height: "1000px"}}>
      <img src={d_t_logo} width="700px" alt="" style={{marginTop: "600px"}} />
      <div>
        <img src="https://media1.giphy.com/media/3SzZfnBD7FEWp78LiK/giphy.gif?cid=6c09b9525zlwvmp6dz95u4berl6sa0ec8y17ztrw9iqsd32w&ep=v1_stickers_related&rid=giphy.gif&ct=s" width="200px" alt="" />
        <h1 style={{color: "white"}}>You made it through!</h1>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c5b54204-d607-4459-8b5a-8c0765b766c7/deu0db5-9f2cd553-49e9-4a68-9bf8-295f5cbefe18.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1YjU0MjA0LWQ2MDctNDQ1OS04YjVhLThjMDc2NWI3NjZjN1wvZGV1MGRiNS05ZjJjZDU1My00OWU5LTRhNjgtOWJmOC0yOTVmNWNiZWZlMTguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sFPrl0k5eZadg0DgXOAPZO52Mgk7IqO0zcqu00T6wfQ" width="100vw" alt="" />
      </div>
      <div id="congrats-slideshow">
        <Welcome newMessage={"I'll be adding more memories here <3"} />
      </div>
      <h1 style={{color: "white"}}>Even though it's late, you should give me a call when you see this!</h1>
    </div>
  )
}

export default Congrats