import App from "./App";
import Dolly from "./Dolly";
import Welcome from "./Welcome";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/i_love_you" element={<Welcome/>} />
        <Route exact path="/i_apologize" element={<Dolly/>} />
      </Routes>
    </div>
  )
}

export default Router;