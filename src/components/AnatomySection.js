import { FaSearch, FaBell } from "react-icons/fa";
import { healthStatusData,healthCards } from "../data/healthData";
import "../styles/AnatomySection.css";
import ActivityFeed from "./ActivityFeed";
import MobileSidebar from "./MobileSidebar";
import useScreenSize from "./UseScreensize"; // custom hook to check screen size

const AnatomySection = () => {

  const isMobile = useScreenSize(); // check screen size
  return (
    <div className="anatomy-section">
     {isMobile && <MobileSidebar />}
      {/* TOP HEADER WITH SEARCH BAR */}
      <div className="top-header">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" className="search-bar" />
          <FaBell className="bell-icon" />
        </div>
      </div>

      {/* DASHBOARD HEADER */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="week-selector">
          <span>This Week</span>
          <span>📅</span>
        </div>
      </div>

      {/* FLEX CHILDREN */}
      <div className="anatomy-main">
        <div className="anatomy-container">
          <img
            src="/images/anatomy-figure.jpg"
            alt="Human anatomy figure"
            className="anatomy-figure"
          />

          {healthStatusData.map((indicator) => (
          <div
            key={indicator.id}
            className="health-indicator"
            style={{
              backgroundColor: indicator.color,
              ...indicator.position,
            }}
          >
            {indicator.name}
          </div>
        ))}
        </div>

        <div className="health-cards">
          {healthCards.map((card) => (
            <div key={card.id} className="health-card">
              <div className="health-card-icon">{card.icon}</div>
              <div className="health-card-content">
                <h4 className="health-card-title">{card.name}</h4>
                <p className="health-card-date">Date: {card.date}</p>
                <div className="progress-bar">
                  <div
                    className={`progress-fill progress-${card.status}`}
                    style={{ width: `${card.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NON-FLEX CHILD */}
      <div className="health-status">
        <ActivityFeed />
      </div>
    </div>
  );
};

export default AnatomySection;

