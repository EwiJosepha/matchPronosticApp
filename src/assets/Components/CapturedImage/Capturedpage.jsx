import "./capturedpage.css";
function Capturedpage() {
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
            <i class="fa-solid fa-battery-three-quarters"></i>
            <i class="fa-solid fa-wifi"></i>
          </div>
        </div>
        <div className="bgimage">
          <img src="/src/assets/images/index.jpeg" />
        </div>
      </div>
    </>
  );
}

export default Capturedpage;
