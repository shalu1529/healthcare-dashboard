import "../styles/Header.css"

const Header = () => {
  return (
    <header className="header">
      
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search" className="search-bar" />
        </div>
      

      <div className="header-right">
        <button className="notification-btn">
          <span>🔔</span>
        </button>

        <div className="user-profile">
          <div className="user-avatar">JD</div>
        </div>

        <button className="add-btn">
          <span>+</span>
          <span>Add</span>
        </button>
      </div>
    </header>
  )
}

export default Header
