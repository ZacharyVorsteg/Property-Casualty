import { getLessonById, getLessonsByTopic } from '../data/lessons';
import { TOPICS } from '../data/questions';

function Lesson({ lessonId, onBack, onQuizSelect }) {
  const lesson = getLessonById(lessonId);

  if (!lesson) {
    return (
      <div className="lesson-container">
        <div className="card" style={{ textAlign: 'center' }}>
          <h2>Lesson not found</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            The requested lesson could not be found.
          </p>
          <button className="btn-primary" onClick={onBack} style={{ marginTop: '1rem' }}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const topic = TOPICS[lesson.topic];
  const topicLessons = getLessonsByTopic(lesson.topic);
  const currentIndex = topicLessons.findIndex(l => l.id === lessonId);

  // Simple markdown-like rendering
  const renderContent = (content) => {
    return content
      .split('\n\n')
      .map((block, i) => {
        // Headers
        if (block.startsWith('## ')) {
          return <h2 key={i} style={{ marginTop: '2rem', marginBottom: '1rem' }}>{block.slice(3)}</h2>;
        }
        if (block.startsWith('### ')) {
          return <h3 key={i}>{block.slice(4)}</h3>;
        }

        // Key points
        if (block.includes('Key Points') || block.includes('MEMORIZE') || block.includes('Exam Tip')) {
          const isFlTip = block.includes('Florida Exam Tip');
          return (
            <div key={i} className={isFlTip ? 'florida-specific' : 'key-point'}>
              <div className={isFlTip ? 'florida-specific-title' : 'key-point-title'}>
                {isFlTip ? '🌴 Florida Exam Tip' : '📌 Key Point'}
              </div>
              <p>{block.replace(/^###?\s*.*\n/, '').replace('Florida Exam Tip', '').trim()}</p>
            </div>
          );
        }

        // Lists
        if (block.includes('\n- ') || block.startsWith('- ')) {
          const items = block.split('\n').filter(line => line.startsWith('- '));
          return (
            <ul key={i}>
              {items.map((item, j) => (
                <li key={j}>{item.slice(2)}</li>
              ))}
            </ul>
          );
        }

        // Numbered lists
        if (block.match(/^\d+\./)) {
          const items = block.split('\n').filter(line => line.match(/^\d+\./));
          return (
            <ol key={i}>
              {items.map((item, j) => (
                <li key={j}>{item.replace(/^\d+\.\s*/, '')}</li>
              ))}
            </ol>
          );
        }

        // Tables (simplified)
        if (block.includes('|')) {
          const rows = block.split('\n').filter(row => row.includes('|'));
          if (rows.length > 1) {
            const headers = rows[0].split('|').filter(cell => cell.trim());
            const dataRows = rows.slice(2).map(row => row.split('|').filter(cell => cell.trim()));

            return (
              <div key={i} style={{ overflowX: 'auto', margin: '1rem 0' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '0.9rem'
                }}>
                  <thead>
                    <tr>
                      {headers.map((h, j) => (
                        <th key={j} style={{
                          textAlign: 'left',
                          padding: '0.75rem',
                          borderBottom: '2px solid var(--border)',
                          backgroundColor: 'var(--bg-card-hover)'
                        }}>
                          {h.trim()}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {dataRows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k} style={{
                            padding: '0.75rem',
                            borderBottom: '1px solid var(--border)'
                          }}>
                            {cell.trim()}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
        }

        // Code blocks / formulas
        if (block.includes('```')) {
          const code = block.replace(/```\w*\n?/g, '');
          return (
            <pre key={i} style={{
              backgroundColor: 'var(--bg-card-hover)',
              padding: '1rem',
              borderRadius: '8px',
              overflowX: 'auto',
              margin: '1rem 0'
            }}>
              <code>{code}</code>
            </pre>
          );
        }

        // Bold text
        let text = block;
        if (text.includes('**')) {
          const parts = text.split(/\*\*(.*?)\*\*/g);
          return (
            <p key={i}>
              {parts.map((part, j) =>
                j % 2 === 1 ? <strong key={j}>{part}</strong> : part
              )}
            </p>
          );
        }

        // Regular paragraph
        if (text.trim()) {
          return <p key={i}>{text}</p>;
        }

        return null;
      })
      .filter(Boolean);
  };

  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <div className="lesson-breadcrumb">
          <span onClick={onBack} style={{ cursor: 'pointer' }}>
            {topic?.name}
          </span>
          {' / '}{lesson.title}
        </div>
        <h1 className="lesson-title">{lesson.title}</h1>
        <p className="lesson-meta">
          Part of {topic?.name} ({topic?.weight}% of exam)
        </p>
      </div>

      <div className="card lesson-content">
        {renderContent(lesson.content)}
      </div>

      <div className="lesson-nav">
        <button className="btn-secondary" onClick={onBack}>
          ← Back to Quiz
        </button>
        <button className="btn-primary" onClick={onQuizSelect}>
          Practice Questions →
        </button>
      </div>
    </div>
  );
}

export default Lesson;
