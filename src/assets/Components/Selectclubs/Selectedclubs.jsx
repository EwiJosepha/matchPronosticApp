import { useState } from "react";
import { jsonObject } from "../Json/Json";
function Selectclubs () {
  const [score, setScore]= useState(0)
  const [showinput, setShowinput]= useState(false)
  const clubs = jsonObject.clubs
function show () {
  setShowinput(!showinput)
  console.log("hey");
}

function handlescores (e) {
  setScore(e.target.value)
}

console.log(score);


  return(
    <>
  <div className="body1">
    <div className="header1">
      <h1 id="title"> Click On Any Flag to Forcast the Score </h1>
    </div>
    {clubs.slice(0,100).map((clubs)=>(
        <div className="flagg">
         
        <img src={clubs.url} onClick={show} />
        <div className="input">
        <h5>{clubs.name}</h5>
        {show &&
        <input type="text"  id="inputfield" onChange={handlescores}/>}
        </div>
      </div>
    ))}
  
  </div>
    </>
  )

}

export default Selectclubs