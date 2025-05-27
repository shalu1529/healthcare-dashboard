import { navigationItems } from "../data/navigationData"
import "../styles/Sidebar.css"


const Sidebar = () => {
  return (
    <aside className="sidebar">
    
      <div className="sidebar-section">
     
     <div className="header-left">
      <div className="logo">Healthcare.</div>
       </div>
        <h3 className="sidebar-title">General</h3>
        <nav>
          <ul className="nav-list">
            {navigationItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a href="/home" className={`nav-link ${item.active ? "active" : ""}`}>
                  <span className="nav-icon">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar



