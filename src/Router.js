import App from "./App";
import Congrats from "./Congrats";
import DTTG from "./DTTG";
import Dolly from "./Dolly";
import Jolene from "./Jolene";
import Tim from "./Tim";
import Welcome from "./Welcome";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/i_love_you" element={<Welcome/>} />
        <Route exact path="/i_apologize" element={<Dolly/>} />
        <Route exact path="/i_still_love_you" element={<Tim/>} />
        <Route exact path="/dont_take_the_girl" element={<DTTG />} />
        <Route exact path="/jolene" element={<Jolene />} />
        <Route exact path="/congratulations" element={<Congrats/>} />
      </Routes>
    </div>
  )
}

export default Router;