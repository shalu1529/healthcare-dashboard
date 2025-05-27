// components/MobileSidebar.js
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navigationItems } from "../data/navigationData";
import "../styles/MobileSidebar.css";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-header">
      {/* <div className="mobile-logo">Healthcare.</div>
      <FaBars className="menu-icon" onClick={() => setIsOpen(true)} /> */}

      <FaBars className="menu-icon" onClick={() => setIsOpen(true)} />
  <div className="mobile-logo">Healthcare.</div>

      {/* Overlay Sidebar */}
      <div className={`mobile-sidebar-overlay ${isOpen ? "open" : ""}`}>
        <div className="mobile-sidebar">
          <div className="mobile-sidebar-header">
            {/* <span className="mobile-logo">Healthcare.</span> */}
            <FaTimes className="close-icon" onClick={() => setIsOpen(false)} />
          </div>

          <nav className="mobile-nav">
            <ul>
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a href="/home" onClick={() => setIsOpen(false)}>
                    {item.icon} {item.name}
                  </a>
                </li>
              ))}
              <li><a href="/profile">👤 Profile</a></li>
              <li><a href="/add">➕ Add</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
