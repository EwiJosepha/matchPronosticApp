import "./capturedpage.css";
import { Appcontextt } from "../Hooks/context";
import { useContext } from "react";
function Capturedpage() {
  const { scores, setScores, scores2 } = useContext(Appcontextt);
  const clubflags = JSON.parse(localStorage.getItem("clubkeys"));
  const clubflags2 = JSON.parse(localStorage.getItem("clubkeys2"));
  const firstflag = clubflags;
  const secondFlag = clubflags2;
  console.log(secondFlag);

  console.log(scores, "from captured");
  return (
    <>
      <div className="body">
        <div className="headers">
          <div className="leftheaders">
            <p>11:24</p>
            <div className="icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>

            <p>...</p>
          </div>
          <div className="rightheaders">
            <i class="fa-solid fa-wifi"></i>
            <i class="fa-solid fa-battery-three-quarters"></i>
          </div>
        </div>
        <div className="bgimage">
          <img src="/src/assets/images/index.jpeg" />
        </div>
        <div className="flags">
          <div className="flag1">
            {/* {firstflag &&
              <img src={firstflag[0].url}/>
            } */}
          </div>
          <div className="scores">
            <h5>{scores}</h5>
            <h5>-</h5>
            <h5>{scores2}</h5>
          </div>
          <div className="flag2">
            {/* {secondFlag && 
            <img src={secondFlag[0].url} />

            } */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Capturedpage;
