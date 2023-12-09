import { jsonObject } from "../Json/Json";
import { Appcontextt } from "../Hooks/context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function Selectclubs() {
  const navigate = useNavigate();
  const { scores, setScores, score2, setScores2 } = useContext(Appcontextt);
  const clubs = jsonObject.clubs;
  const [clubss, setClubss] = useState();


  function handlescores(clubs) {
    setClubss(clubs);

    const randomScore = Math.floor(Math.random() * 10);
    setScores(randomScore);
    console.log(randomScore);
    const scoretolocalstorage =    
      localStorage.setItem("scorekey", JSON.stringify(scores));
    

    const flagName = clubs.name;
    const saveobjToLocalstorage = localStorage.setItem(
      "clubkeys",
      JSON.stringify(clubss)
    );
  }

  function handlescores2(clubs) {
    setClubss(clubs);
    console.log(clubss);

    const randomScore = Math.floor(Math.random() * 10);
    setScores2(randomScore);
    console.log(randomScore);
    const scoretolocalstorage =    
      localStorage.setItem("scorekey2", JSON.stringify(score2));

    const clubtolocalstorage = localStorage.setItem(
      "clubkey2",
      JSON.stringify(clubss)
    );
  }

  console.log({ scores });

  return (
    <>
      <div className="body1">
        <div className="header1">
          <h1 id="title"> Click On Any Flag to Forecast the Score </h1>
          {scores ? (
            <button
              id="btn"
              onClick={() => {
                navigate("/CapturedImage");
              }}
            >
              Submit Scores
            </button>
          ) : (
            <h2>Please select a Club</h2>
          )}
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
