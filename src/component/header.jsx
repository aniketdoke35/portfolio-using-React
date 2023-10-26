import img1 from "../images/logo.png";
import React, {useState} from "react";
import resume from "../images/AniketD-Resume.pdf"
function Header() {
  // useEffect(() => {
  //   const list = document.querySelectorAll(".click");

  //   list.forEach((element) => {
  //     element.addEventListener("click", () => {
  //       element.style.color = "#e74c4c";
  //     });
  //   });
  // }, []);
  const[showMediaIcon , setshowMediaIcon ] = useState(false);
 

  return (
    <div className="nav">
      <div className="logo">
        <img src={img1} alt="logo" />
      </div>

      <div className="menu-toggle" onClick={() => setshowMediaIcon(!showMediaIcon)}>
        <i class="fa-solid fa-bars"></i>
      </div>

      <div className= {showMediaIcon ? "links menu-toggle": "links"}>
        <ul>
          <li>
            <a className="click text-danger" href="" >
              Home
            </a>
          </li>
          <li>
            <a className="click" href="#about">
              About-us
            </a>
          </li>
          <li>
            <a className="click" href="#experience1">
              Experience
            </a>
          </li>
          <li>
            <a className="click" href="#education">
              Education
            </a>
          </li>
          <li>
            <a className="click" href="#project">
              Projects
            </a>
          </li>
          <li>
            <a className="click" href="#de">
              Contact-Us
            </a>
          </li>
          <li>
          <a href={resume} download><button>Download CV</button></a>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default Header;
