import "./App.css";
import { useState } from "react";
import Menuopen from "./images/menu_open.png";
import Menuclose from "./images/menu_close.png";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <h1 className="logo_desktop">LOGO</h1>
      <nav className="desktop_nav">
        {/* MOBILE MENU TOOGLER INTITIATOR STARTS HERE */}
        <img
          src={isOpen === true ? Menuclose : Menuopen}
          alt="Menu"
          onClick={toggleMenu}
          className="mob_MenuOpen"
        />
        {/* MOBILE MENU TOOGLER INTITIATOR ENDS HERE */}
        <ul className="desktop_ul">
          <li className="desktop_li">
            <a href="#" className="desktop_a">
              Home
            </a>
          </li>
          <li className="desktop_li">
            <a href="#" className="desktop_a">
              Shop
            </a>
          </li>
          <li className="desktop_li">
            <a href="#" className="desktop_a">
              About
            </a>
          </li>
          <li className="desktop_li">
            <a href="#" className="desktop_a">
              Contact
            </a>
          </li>
          <li className="desktop_li">
            <a href="#" className="desktop_a">
              Services
            </a>
          </li>
        </ul>
      </nav>
      <button className="btn_login_desktop">Login In</button>
      {/* MOBILE NAV STARTS HERE */}
      {isOpen && (
        <nav className="mobile_nav">
          <ul className="mobile_ul">
            <li className="mobile_li">
              <a href="#" className="mobile_a">
                Home
              </a>
            </li>
            <li className="mobile_li">
              <a href="#" className="mobile_a">
                Shop
              </a>
            </li>
            <li className="mobile_li">
              <a href="#" className="mobile_a">
                About
              </a>
            </li>
            <li className="mobile_li">
              <a href="#" className="mobile_a">
                Contact
              </a>
            </li>
            <li className="mobile_li">
              <a href="#" className="mobile_a">
                Services
              </a>
            </li>
            <button className="btn_login_mobile">Login In</button>
          </ul>
        </nav>
      )}

      {/* MOBILE NAV ENDS HERE */}
    </div>
  );
}

export default App;
