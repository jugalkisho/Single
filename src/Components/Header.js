import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Header() {
  const [icon,seticon]=useState(false)
  return (
    <div className="container-fluid Header1">
      <div className="container">
      <div className="row">
        <div className="col-md-2 col-lg-2 col-sm-3 col-3">
          <img
              className="img1"
            src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.2.1083868299.1684308440&semt=sph"
          />
        </div>
        <div className="col-md-7 col-lg-7">
          <ul className={icon ? "menu-list":"list"}>
            <li className="list-item">Home</li>
            <li className="list-item">Contact Us</li>     
          </ul>
        </div>
        <div className="col-lg-3 col-md-3">
        <div className="hemberger" onClick={()=>seticon(!icon)}>
          <FaBars />
          </div>
          <button className="button1"> Click me</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Header;
