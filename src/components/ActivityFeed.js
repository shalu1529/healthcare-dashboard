import "../styles/Activity.css";


const ActivityFeed = () => {
  return (
    <div className="activity-section">
      <div className="activity-header">
        <h3 className="activity-title">Activity</h3>
        <p className="activity-subtitle">3 appointments on this week</p>
      </div>

      <div className="activity-image-wrapper">
        <img
          src="/images/activity-image.png"
          alt="Activity Chart"
          className="activity-image"
        />
      </div>
    </div>
  );
};

export default ActivityFeed;

