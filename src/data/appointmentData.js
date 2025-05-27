// Calendar and appointment data
export const calendarData = {
  month: "October 2021",
  days: [
    { date: 25, day: "Mon", appointments: ["10:00", "11:00", "12:00"] },
    { date: 26, day: "Tues", appointments: ["08:00", "09:00", "10:00"] },
    { date: 27, day: "Wed", appointments: ["12:00", "13:00"] },
    { date: 28, day: "Thurs", appointments: ["10:00", "11:00"] },
    { date: 29, day: "Fri", appointments: ["14:00", "14:00", "16:00"] },
    { date: 30, day: "Sat", appointments: ["12:00", "14:00", "15:00"] },
    { date: 31, day: "Sun", appointments: ["09:00", "10:00", "11:00"] },
  ],
}

// Featured appointments
export const featuredAppointments = [
  {
    id: 1,
    type: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    icon: "🦷",
    color: "#4F46E5",
  },
  {
    id: 2,
    type: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    icon: "💪",
    color: "#e6e6fa",
    
  },
]

// Upcoming schedule data
export const upcomingSchedule = {
  thursday: [
    {
      id: 1,
      title: "Health checkup complete",
      time: "11:00 AM",
      icon: "💉",
      color: "#EF4444",
    },
    {
      id: 2,
      title: "Ophthalmologist",
      time: "14:00 PM",
      icon: "👁️",
      color: "#F59E0B",
    },
  ],
  saturday: [
    {
      id: 3,
      title: "Cardiologist",
      time: "12:00 AM",
      icon: "❤️",
      color: "#EF4444",
    },
    {
      id: 4,
      title: "Neurologist",
      time: "16:00 PM",
      icon: "🧠",
      color: "#10B981",
    },
  ],
}

// Activity chart data
export const activityData = [
  { day: "Mon", value: 30 },
  { day: "Tues", value: 80 },
  { day: "Wed", value: 45 },
  { day: "Thurs", value: 60 },
  { day: "Fri", value: 90 },
  { day: "Sat", value: 40 },
  { day: "Sun", value: 70 },
]
