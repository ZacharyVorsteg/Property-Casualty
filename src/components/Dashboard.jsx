import { TOPICS, getQuestionCounts } from '../data/questions';

function Dashboard({ onTopicSelect, progress }) {
  const questionCounts = getQuestionCounts();

  const getOverallStats = () => {
    const totalAnswered = progress?.totalAnswered || 0;
    const totalCorrect = progress?.totalCorrect || 0;
    const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
    const streakDays = progress?.streakDays?.length || 0;

    return { totalAnswered, totalCorrect, accuracy, streakDays };
  };

  const stats = getOverallStats();

  const getTopicMastery = (topicId) => {
    return progress?.topics?.[topicId]?.mastery || 0;
  };

  const getMasteryColor = (mastery) => {
    if (mastery >= 80) return '#16a34a';
    if (mastery >= 60) return '#f59e0b';
    return '#3b82f6';
  };

  return (
    <div className="dashboard container">
      <div className="dashboard-header">
        <h1>Florida Property & Casualty Exam Prep</h1>
        <p>Master all topics to pass your 2-20 license exam with 70% or higher</p>
      </div>

      <div className="stats-grid">
        <div className="card stat-card">
          <div className="stat-value">{stats.totalAnswered}</div>
          <div className="stat-label">Questions Answered</div>
        </div>
        <div className="card stat-card">
          <div className="stat-value">{stats.accuracy}%</div>
          <div className="stat-label">Accuracy</div>
        </div>
        <div className="card stat-card">
          <div className="stat-value">{stats.streakDays}</div>
          <div className="stat-label">Study Days</div>
        </div>
        <div className="card stat-card">
          <div className="stat-value">70%</div>
          <div className="stat-label">Passing Score</div>
        </div>
      </div>

      <h2 style={{ marginBottom: '1rem' }}>Study by Topic</h2>
      <div className="topics-grid">
        {Object.values(TOPICS).map((topic) => {
          const mastery = getTopicMastery(topic.id);
          const topicProgress = progress?.topics?.[topic.id];

          return (
            <div
              key={topic.id}
              className="card topic-card"
              onClick={() => onTopicSelect(topic.id)}
            >
              <div className="topic-header">
                <span className="topic-name">{topic.name}</span>
                <span className="topic-weight">{topic.weight}% of exam</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                {topic.description}
              </p>
              <div className="topic-stats">
                <span>{questionCounts[topic.id] || 0} questions</span>
                <span>{topicProgress?.answered || 0} attempted</span>
              </div>
              <div className="topic-mastery">
                <div className="mastery-label">
                  <span>Mastery</span>
                  <span>{mastery}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${mastery}%`,
                      backgroundColor: getMasteryColor(mastery)
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="card" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Ready for the real thing?</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Take a full 100-question practice exam with a 2-hour timer
        </p>
        <button
          className="btn-primary"
          onClick={() => window.dispatchEvent(new CustomEvent('startExam'))}
        >
          Start Practice Exam
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
