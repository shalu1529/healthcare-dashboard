
import Sidebar from "./components/Sidebar"
import DashboardMainContent from "./components/DashboardMainContent"
import "./styles/App.css"

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        
        <DashboardMainContent />
      </div>
    </div>
  )
}

export default App
