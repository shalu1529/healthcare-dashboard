import { upcomingSchedule } from "../data/appointmentData";
import "../styles/Schedule.css";

const UpcomingSchedule = () => {
  return (
    <div className="schedule-section">
      <h3 className="schedule-title">The Upcoming Schedule</h3>

      <div className="schedule-day">
        <h4 className="day-title">On Thursday</h4>
        <div className="schedule-appointments">
          {upcomingSchedule.thursday.map((appointment) => (
            <div key={appointment.id} className="schedule-card new-style">
              <div className="schedule-card-content">
                <div>
                  <div className="schedule-card-title">{appointment.title}</div>
                  <div className="schedule-card-time">{appointment.time}</div>
                </div>
                <span className="schedule-icon-right">{appointment.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="schedule-day">
        <h4 className="day-title">On Saturday</h4>
        <div className="schedule-appointments">
          {upcomingSchedule.saturday.map((appointment) => (
            <div key={appointment.id} className="schedule-card new-style">
              <div className="schedule-card-content">
                <div>
                  <div className="schedule-card-title">{appointment.title}</div>
                  <div className="schedule-card-time">{appointment.time}</div>
                </div>
                <span className="schedule-icon-right">{appointment.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
