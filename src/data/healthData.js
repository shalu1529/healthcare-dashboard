const isSmallScreen = window.innerWidth <= 768;
export const healthStatusData = [
  {
    id: 1,
    name: "Healthy Heart",
    status: "healthy",
    color: "#4F46E5",
    // position: { top: "25%", right: "20%" },
    position: isSmallScreen
      ? { top: "100px", left: "130px" }
      : { top: "85px", left: "190px" }
  },
  {
    id: 2,
    name: "Healthy Leg",
    status: "healthy",
    color: "#06B6D4",
    // position: { bottom: "35%", left: "15%" },
    position: isSmallScreen
    ? { bottom: "80px", left: "30px" }
      : { bottom: "70px", left: "30px" }
  },
]


export const healthCards = [
  {
    id: 1,
    name: "Lungs",
    icon: "🫁",
    date: "30 Oct 2021",
    status: "warning",
    progress: 75,
  },
  {
    id: 2,
    name: "Teeth",
    icon: "🦷",
    date: "26 Oct 2021",
    status: "good",
    progress: 85,
  },
  {
    id: 3,
    name: "Bone",
    icon: "🦴",
    date: "26 Oct 2021",
    status: "attention",
    progress: 60,
  },
]
