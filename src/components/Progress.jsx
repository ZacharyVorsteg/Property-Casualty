import { TOPICS } from '../data/questions';

function Progress({ progress, onTopicSelect }) {
  const getMasteryColor = (mastery) => {
    if (mastery >= 80) return 'var(--success)';
    if (mastery >= 60) return 'var(--warning)';
    return 'var(--primary-light)';
  };

  const totalAnswered = progress?.totalAnswered || 0;
  const totalCorrect = progress?.totalCorrect || 0;
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const examHistory = progress?.examHistory || [];
  const streakDays = progress?.streakDays || [];

  // Calculate overall readiness
  const topicMasteries = Object.values(progress?.topics || {}).map(t => t.mastery || 0);
  const avgMastery = topicMasteries.length > 0
    ? Math.round(topicMasteries.reduce((a, b) => a + b, 0) / topicMasteries.length)
    : 0;

  const getReadinessStatus = () => {
    if (avgMastery >= 80 && accuracy >= 75) return { status: 'Ready', color: 'var(--success)' };
    if (avgMastery >= 60 && accuracy >= 65) return { status: 'Almost Ready', color: 'var(--warning)' };
    return { status: 'Keep Studying', color: 'var(--danger)' };
  };

  const readiness = getReadinessStatus();

  // Last 7 days for streak calendar
  const last7Days = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toDateString();
    last7Days.push({
      date: dateStr,
      day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()],
      active: streakDays.includes(dateStr)
    });
  }

  return (
    <div className="progress-container">
      <div className="progress-header">
        <h1>Your Progress</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Track your study progress and exam readiness
        </p>
      </div>

      {/* Readiness Card */}
      <div className="card" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h3>Exam Readiness</h3>
        <div style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: readiness.color,
          margin: '1rem 0'
        }}>
          {readiness.status}
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>
          Average mastery: {avgMastery}% | Overall accuracy: {accuracy}%
        </p>
      </div>

      {/* Overall Stats */}
      <div className="overall-stats">
        <div className="card stat-card">
          <div className="stat-value">{totalAnswered}</div>
          <div className="stat-label">Questions Answered</div>
        </div>
        <div className="card stat-card">
          <div className="stat-value">{totalCorrect}</div>
          <div className="stat-label">Correct Answers</div>
        </div>
        <div className="card stat-card">
          <div className="stat-value">{accuracy}%</div>
          <div className="stat-label">Accuracy Rate</div>
        </div>
        <div className="card stat-card">
          <div className="stat-value">{examHistory.length}</div>
          <div className="stat-label">Practice Exams</div>
        </div>
      </div>

      {/* Study Streak */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Study Streak</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
          {last7Days.map((day, i) => (
            <div key={i} style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                width: '100%',
                aspectRatio: '1',
                borderRadius: '8px',
                backgroundColor: day.active ? 'var(--success)' : 'var(--bg-card-hover)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.25rem'
              }}>
                {day.active && '✓'}
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                {day.day}
              </span>
            </div>
          ))}
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '1rem', textAlign: 'center' }}>
          {streakDays.length} total study days
        </p>
      </div>

      {/* Topic Breakdown */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Topic Mastery</h3>
        {Object.values(TOPICS).map((topic) => {
          const topicProgress = progress?.topics?.[topic.id] || { mastery: 0, answered: 0, correct: 0 };
          const mastery = topicProgress.mastery || 0;

          return (
            <div key={topic.id} className="topic-progress" onClick={() => onTopicSelect(topic.id)} style={{ cursor: 'pointer' }}>
              <div className="topic-progress-header">
                <span className="topic-progress-name">
                  {topic.name}
                  <span style={{ color: 'var(--text-muted)', marginLeft: '0.5rem', fontWeight: 'normal' }}>
                    ({topic.weight}% of exam)
                  </span>
                </span>
                <span className="topic-progress-percent" style={{ color: getMasteryColor(mastery) }}>
                  {mastery}%
                </span>
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
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                {topicProgress.answered} questions • {topicProgress.correct} correct
              </div>
            </div>
          );
        })}
      </div>

      {/* Exam History */}
      {examHistory.length > 0 && (
        <div className="card">
          <h3 style={{ marginBottom: '1rem' }}>Practice Exam History</h3>
          {examHistory.slice().reverse().map((exam, i) => {
            const date = new Date(exam.date);
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.75rem',
                  backgroundColor: 'var(--bg-card-hover)',
                  borderRadius: '8px',
                  marginBottom: '0.5rem'
                }}
              >
                <div>
                  <span style={{ fontWeight: '600' }}>
                    {date.toLocaleDateString()}
                  </span>
                  <span style={{ color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                    {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <div style={{
                  fontWeight: '700',
                  color: exam.passed ? 'var(--success)' : 'var(--danger)'
                }}>
                  {exam.score}% {exam.passed ? '✓' : ''}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Tips */}
      <div className="card" style={{ marginTop: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Study Tips</h3>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Focus on high-weight topics first (Terms & Concepts: 28%, Policy Provisions: 24%)</li>
          <li style={{ marginBottom: '0.5rem' }}>Florida-specific statutes are frequently tested - know Chapter 626 and 627</li>
          <li style={{ marginBottom: '0.5rem' }}>Practice exam conditions: 100 questions, 2 hours, no breaks</li>
          <li style={{ marginBottom: '0.5rem' }}>Review wrong answers immediately - the lesson content will help</li>
          <li>Aim for 80%+ mastery in each topic before taking the real exam</li>
        </ul>
      </div>
    </div>
  );
}

export default Progress;
