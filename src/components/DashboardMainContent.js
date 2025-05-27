import AnatomySection from "./AnatomySection"
import CalendarView from "./CalendarView"
import "../styles/Dashboard.css"

const DashboardMainContent = () => {
  return (
    <div className="dashboard">

      <div className="dashboard-grid">
        <div className="left-section">
          <AnatomySection />
          
        </div>

        <div className="right-section">
          <CalendarView />
        
        </div>
      </div>
    </div>
  )
}

export default DashboardMainContent
