const SlideShow = () => {
  return (
    <ul id="slides">
      <li id="first-slide" className="slides"><img src={headshot} alt="" /></li>
      <li className="slides"><img src={spooner} alt=""/></li>
      <li className="slides"><img src={iceage} alt=""/></li>
      <li className="slides"><img src={dance} alt=""/></li>
      <li className="slides"><img src={chess} alt=""/></li>
      <li className="slides"><img src={chippewa} alt=""/></li>
      <li className="slides"><button style={{margin: "150px 55px"}} onClick={() => navigate("/i_apologize")}>Now Click Here</button></li>
    </ul>
  )
}

export default SlideShow;