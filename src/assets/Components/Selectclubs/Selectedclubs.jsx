import { jsonObject } from "../Json/Json";
import { Appcontextt } from "../Hooks/context";
import { useContext } from "react";

function Selectclubs() {
  const { scores, setScores, score2, setScores2 } = useContext(Appcontextt);
  const clubs = jsonObject.clubs;

  function handlescores(clubs) {
    const randomScore = Math.floor(Math.random() * 10);
    setScores(randomScore);
    console.log(randomScore);
    const scoretolocalstorage =
      JSON.parse(localStorage.getItem("scorekey")) || [];
    if (scoretolocalstorage) {
      const savescores = [...scoretolocalstorage, scores];
      localStorage.setItem("scorekey", JSON.stringify(savescores));
    }

    const saveobjToLocalstorage =
      JSON.parse(localStorage.getItem("clubkeys")) || [];
    const flagName = clubs.name;
    console.log(flagName);
    const findflag = saveobjToLocalstorage.find(
      (flag) => flag.name === flagName
    );
    if (findflag) {
      const updateflags = [...saveobjToLocalstorage, clubs];
      localStorage.setItem("clubkeys", JSON.stringify(updateflags));
    } else {
      const updateflags = [...saveobjToLocalstorage, clubs];
      localStorage.setItem("clubkeys", JSON.stringify(updateflags));
    }
  }

  function handlescores2(clubs) {
    const randomScore = Math.floor(Math.random() * 10);
    setScores2(randomScore);
    console.log(randomScore);
    const scoretolocalstorage =
      JSON.parse(localStorage.getItem("scorekey2")) || [];
    if (scoretolocalstorage) {
      const savescores = [...scoretolocalstorage, scores];
      localStorage.setItem("scorekey2", JSON.stringify(savescores));
    }

    const saveobjToLocalstorage =
      JSON.parse(localStorage.getItem("clubkeys2")) || [];
    const flagName = clubs.name;
    console.log(flagName);
    const findflag = saveobjToLocalstorage.find(
      (flag) => flag.name === flagName
    );
    if (findflag) {
      const updateflags = [...saveobjToLocalstorage, clubs];
      localStorage.setItem("clubkeys2", JSON.stringify(updateflags));
    } else {
      const updateflags = [...saveobjToLocalstorage, clubs];
      localStorage.setItem("clubkeys2", JSON.stringify(updateflags));
    }
  }

  console.log({scores});

  return (
    <>
      <div className="body1">
        <div className="header1">
          <h1 id="title"> Click On Any Flag to Forecast the Score </h1>
        </div>
        <div className="bdy">
      <div className="leftbdy">
        {clubs.slice(0, 100).map((clubs, index) => (
          <div className="flagg">
            <img
              src={clubs.url}
              key={index}
              onClick={() => handlescores(clubs)}
            />
            <div className="input">
              <h5>{clubs.name}</h5>
            </div>
          </div>
        ))}
        </div>
      <div className="rightbdy">
        {clubs.slice(0, 100).map((clubs, index) => (
          <div className="flagg">
            <img
              src={clubs.url}
              key={index}
              onClick={() => handlescores2(clubs)}
            />
            <div className="input">
              <h5>{clubs.name}</h5>
            </div>
          </div>
        ))}
        </div>
        </div>
      </div>
    </>
  );
}

export default Selectclubs;
