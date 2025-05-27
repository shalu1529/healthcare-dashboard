import { calendarData, featuredAppointments } from "../data/appointmentData"
import "../styles/Calendar.css"

import UpcomingSchedule from "./UpcomingSchedule"



const CalendarView = () => {
  return (
    <div className="calendar-section">
      {/* NEW top bar */}
      <div className="calendar-topbar">
        <div className="calendar-icons">
          <div className="profile-circle">S</div>
          <button className="add-btn">+</button>
        </div>
      </div>

      {/* Existing header */}
      <div className="calendar-header">
        <h3 className="calendar-title">{calendarData.month}</h3>
        <div className="calendar-nav">
          <button className="nav-btn">←</button>
          <button className="nav-btn">→</button>
        </div>
      </div>

      {/* Calendar body and rest */}
      <div className="calendar-grid">
        {calendarData.days.map((day) => (
          <div key={day.date} className="calendar-day">
            <div className="day-header">{day.day}</div>
            <div className="day-number">{day.date}</div>
            <div className="day-appointments">
              {day.appointments.map((time, index) => (
                <span key={index} className="appointment-time">
                  {time}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="featured-appointments">
        {featuredAppointments.map((appointment) => (
          <div key={appointment.id} className="appointment-card" style={{ backgroundColor: appointment.color,color: appointment.id === 2 ? "black" : "white", }}>
            <div className="appointment-icon">{appointment.icon}</div>
            <div className="appointment-type">{appointment.type}</div>
            <div className="appointment-time-slot">{appointment.time}</div>
            <div className="appointment-doctor">{appointment.doctor}</div>
          </div>
        ))}
      </div>

      <div className="upcoming-schedule">
        <UpcomingSchedule />
      </div>
    </div>
  );
};


export default CalendarView
