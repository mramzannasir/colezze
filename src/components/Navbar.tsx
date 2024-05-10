/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/globals.css";
import logo from "/images/Logo.svg";
import { useSidebarContext } from "../contexts/sidebarContext";

const Navbar: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarContext();
  const [hoveredLink, setHoveredLink] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  }, [isSidebarOpen]);

  const handleLinkClick = (path: string) => {
    navigate(path);
    toggleSidebar();
  };

  const handleLinkHover = (linkName: any) => {
    setHoveredLink(linkName);
  };
  console.log(hoveredLink);

  return (
    <>
      <nav className="navbar">
        {/* Overlay div to show/hide based on sidebar state */}
        <div
          className={`coverBackground ${isSidebarOpen ? "showCover" : ""}`}
          onClick={toggleSidebar}
        ></div>
        <div className="container1 navItem">
          <div className={`navItemLeft`}>
            {/* Menu button that toggles the sidebar state */}
            <div
              className={`menuButton ${isSidebarOpen ? "active" : ""}`}
              onClick={toggleSidebar}
            >
              <div className={`menuIcon`}>
                <span
                  className={`menuBar ${isSidebarOpen ? "changeBar1" : ""}`}
                ></span>
                <span
                  className={`menuBar ${isSidebarOpen ? "changeBar2" : ""}`}
                ></span>
                <span
                  className={`menuBar ${isSidebarOpen ? "changeBar3" : ""}`}
                ></span>
              </div>
              {/* Text changes based on sidebar state */}
              <div className={`textBlock`}>
                <span
                  className={`menuText ${isSidebarOpen ? " hideMenuText" : ""}`}
                >
                  Menu
                </span>
                <span
                  className={`closeText ${
                    isSidebarOpen ? "" : "hideCloseText"
                  }`}
                >
                  Close
                </span>
              </div>
            </div>
          </div>
          {/* Logo image */}
          <div className="navItem">
            {location.pathname === "/" ? (
              <img
                src={logo}
                alt="Logo"
                style={{ cursor: "pointer" }}
                className={`logoButton logo`}
              />
            ) : (
              <Link to="/">
                <img src={logo} alt="Logo" className={`logoButton logo`} />
              </Link>
            )}
          </div>
          {/* Navigation links */}
          <div className={`navItem navRight`}></div>
          {/* Sidebar content */}
          <div className={`sidebar ${isSidebarOpen ? "showSidebar" : ""}`}>
            {/* Adding sidebar links */}
            <div className={"sidebarContainer"}>
              <Link
                to="/collections"
                onClick={() => handleLinkClick("/collections")}
                className={`sidebarLinkButton ${
                  hoveredLink === "contact" ? "hovered" : ""
                } `}
                onMouseEnter={() => handleLinkHover("collections")}
                onMouseLeave={() => handleLinkHover(null)}
                draggable={false}
              >
                <span className={"sidebarLink"}>Collections</span>
              </Link>
              <Link
                to="/contact"
                onClick={() => handleLinkClick("/contact")}
                className={`sidebarLinkButton ${
                  hoveredLink === "collections" ? "hovered" : ""
                } `}
                onMouseEnter={() => handleLinkHover("contact")}
                onMouseLeave={() => handleLinkHover(null)}
                draggable={false}
              >
                <span className="sidebarLink">Contact Us</span>
              </Link>

              <div className="first-icon">
                <div style={{ fontSize: "20px" }}> {">>"}</div>
              </div>
              <div className="second-icon">
                <div style={{ fontSize: "20px" }}> {">>"}</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
