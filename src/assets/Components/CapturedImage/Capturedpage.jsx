import "./capturedpage.css";
import { Appcontextt } from "../Hooks/context";
import {  createRef, useContext } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";
function Capturedpage() {
  const [image, takeScreenshot]= useScreenshot({
    type: "image/jpeg",
    quality: 1.0
  })

  const ref = createRef(null)
  const { scores, setScores, scores2 } = useContext(Appcontextt);
  const clubflags = JSON.parse(localStorage.getItem("clubkeys"));
  const clubflags2 = JSON.parse(localStorage.getItem("clubkey2"));
  const firstflag = clubflags;
  const secondFlag = clubflags2;
  console.log(secondFlag);

  function download (image,{name= "img", extension = "jpg"} = {} ){
    const a = document.createElement("a")
    a.href = image
    a.download = createFileName(extension, name)
    a.click()
    
  }
  
 function takescreenshot () {
    takeScreenshot(ref.current).then(download)
 }

  console.log(scores, "from captured");
  return (
    <>
      <div className="body"  ref={ref}>
        <button onClick={takescreenshot}>Take screenshot</button>
        <div className="headers" >
          <div className="leftheaders">
            <p>11:24</p>
            <div className="icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>

            <p>...</p>
          </div>
          <div className="rightheaders">
            <i className="fa-solid fa-wifi"></i>
            <i className="fa-solid fa-battery-three-quarters"></i>
          </div>
        </div>
        <div className="bgimage">
          <img src="/src/assets/images/index.jpeg" />
        </div>
        <div className="flags">
          <div className="flag1">
            {firstflag &&
             <img src={firstflag.url} />
            }
          </div>
          <div className="scores">
            <h5>{scores}</h5>
            <h5>-</h5>
            <h5>{scores2}</h5>
          </div>
          <div className="flag2">
            {secondFlag &&
              <img src={secondFlag.url} />
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Capturedpage;
