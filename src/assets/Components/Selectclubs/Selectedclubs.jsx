import { useState } from "react";
import { jsonObject } from "../Json/Json";
import { Appcontextt } from "../Hooks/context";
import { useContext } from "react";
function Selectclubs() {
  const [score, setScore] = useContext(Appcontextt) 
  const clubs = jsonObject.clubs;

  function handlescores() {
    const randomScore = Math.floor(Math.random() * 10)
    setScore(randomScore)
 
  }

  console.log(score);

  return (
    <>
      <div className="body1">
        <div className="header1">
          <h1 id="title"> Click On Any Flag to Forcast the Score </h1>
        </div>
        {clubs.slice(0, 100).map((clubs, index) => (
          <div className="flagg">
            <img src={clubs.url} key={index} onClick={handlescores} />
            <div className="input">
              <h5>{clubs.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Selectclubs;
