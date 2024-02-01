import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import hamburgerIcon from "./../../assets/img/hamburgermenu.png";
import closeIcon from "./../../assets/img/x_close_icon.png";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="sidebar-container" ref={sidebarRef}>
      <button className="sidebar-button" onClick={toggleSidebar}>
        <img src={isOpen ? closeIcon : hamburgerIcon} alt="햄버거 아이콘" />
      </button>
      {isOpen && (
        <div className="nav_link">
          {/* <Link to="/" onClick={closeSidebar}><p>홈</p></Link> */}
          <Link to="/" onClick={closeSidebar}>
            <p>HOME</p>
          </Link>
          <Link to="/about-us" onClick={closeSidebar}>
            <p>ABOUT US</p>
          </Link>
          <Link to="/contact" onClick={closeSidebar}>
            <p>CONTACT</p>
          </Link>
          <Link to="/zh-cht">
            <p className="selectLang">🇨🇳 華語(繁體)</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
