import { TOPICS } from '../data/questions';

function Results({ results, onBack, onLessonSelect, onRetake }) {
  if (!results) {
    return (
      <div className="results-container">
        <div className="card" style={{ textAlign: 'center' }}>
          <h2>No results available</h2>
          <button className="btn-primary" onClick={onBack} style={{ marginTop: '1rem' }}>
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const { score, passed, correct, total, breakdown, timeUsed } = results;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  // Find weak topics (below 70%)
  const weakTopics = Object.entries(breakdown)
    .filter(([_, data]) => data.total > 0 && (data.correct / data.total) < 0.7)
    .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total));

  return (
    <div className="results-container">
      <div className="card results-header">
        <h2>{passed ? '🎉 Congratulations!' : 'Keep Studying!'}</h2>
        <div className={`results-score ${passed ? 'pass' : 'fail'}`}>
          {score}%
        </div>
        <div className="results-status">
          {passed
            ? 'You passed! You\'re ready for the real exam.'
            : 'You need 70% to pass. Review weak areas and try again.'}
        </div>
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
          {correct} of {total} correct • Time: {formatTime(timeUsed)}
        </p>
      </div>

      <div className="card results-breakdown">
        <h3 style={{ marginBottom: '1rem' }}>Score by Topic</h3>
        {Object.entries(breakdown).map(([topicId, data]) => {
          if (data.total === 0) return null;
          const topicScore = Math.round((data.correct / data.total) * 100);
          const isPassing = topicScore >= 70;

          return (
            <div key={topicId} className="breakdown-item">
              <div className="breakdown-name">
                {TOPICS[topicId]?.name}
                <span style={{ color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                  ({TOPICS[topicId]?.weight}%)
                </span>
              </div>
              <div
                className="breakdown-score"
                style={{ color: isPassing ? 'var(--success)' : 'var(--danger)' }}
              >
                {data.correct}/{data.total} ({topicScore}%)
              </div>
            </div>
          );
        })}
      </div>

      {weakTopics.length > 0 && (
        <div className="card weak-topics">
          <h3>📚 Topics to Review</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Focus on these areas to improve your score:
          </p>
          {weakTopics.map(([topicId, data]) => {
            const topicScore = Math.round((data.correct / data.total) * 100);
            return (
              <div
                key={topicId}
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
                  <strong>{TOPICS[topicId]?.name}</strong>
                  <span style={{ color: 'var(--danger)', marginLeft: '0.5rem' }}>
                    {topicScore}%
                  </span>
                </div>
                <button
                  className="btn-secondary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                  onClick={() => {
                    // Navigate to topic quiz
                    window.location.hash = `#topic-${topicId}`;
                    onBack();
                  }}
                >
                  Study
                </button>
              </div>
            );
          })}
        </div>
      )}

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
        <button className="btn-secondary" onClick={onBack}>
          Back to Dashboard
        </button>
        <button className="btn-primary" onClick={onRetake}>
          Retake Exam
        </button>
      </div>

      {/* Detailed Question Review */}
      <div className="card" style={{ marginTop: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Question Review</h3>
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {results.questions.map((q, i) => {
            const userAnswer = results.answers[q.id];
            const isCorrect = userAnswer === q.correct;

            return (
              <div
                key={q.id}
                style={{
                  padding: '1rem',
                  borderBottom: '1px solid var(--border)',
                  backgroundColor: isCorrect ? 'rgba(22, 163, 74, 0.1)' : 'rgba(220, 38, 38, 0.1)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: '600' }}>Q{i + 1}</span>
                  <span style={{ color: isCorrect ? 'var(--success)' : 'var(--danger)' }}>
                    {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </span>
                </div>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{q.question}</p>
                {!isCorrect && (
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <div>Your answer: {q.options[userAnswer] || 'Not answered'}</div>
                    <div style={{ color: 'var(--success)' }}>
                      Correct: {q.options[q.correct]}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Results;
