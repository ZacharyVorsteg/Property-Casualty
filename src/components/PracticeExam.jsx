import { useState, useEffect, useRef } from 'react';
import { getExamQuestions, TOPICS } from '../data/questions';
import { recordExamResult } from '../utils/storage';

function PracticeExam({ onBack, onComplete }) {
  const [started, setStarted] = useState(false);
  const [examQuestions, setExamQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(180 * 60); // 3 hours in seconds
  const [showConfirm, setShowConfirm] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (started && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [started]);

  const startExam = () => {
    const questions = getExamQuestions(160);
    setExamQuestions(questions);
    setStarted(true);
  };

  const handleAnswer = (questionId, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleSubmit = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    // Calculate results
    let correct = 0;
    const breakdown = {};

    Object.keys(TOPICS).forEach(topicId => {
      breakdown[topicId] = { correct: 0, total: 0 };
    });

    examQuestions.forEach(q => {
      breakdown[q.topic].total++;
      if (answers[q.id] === q.correct) {
        correct++;
        breakdown[q.topic].correct++;
      }
    });

    const score = Math.round((correct / examQuestions.length) * 100);
    const passed = score >= 70;

    const results = {
      score,
      passed,
      correct,
      total: examQuestions.length,
      breakdown,
      answers,
      questions: examQuestions,
      timeUsed: (180 * 60) - timeRemaining
    };

    recordExamResult(results);
    onComplete(results);
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimerClass = () => {
    if (timeRemaining <= 300) return 'timer danger'; // 5 minutes
    if (timeRemaining <= 900) return 'timer warning'; // 15 minutes
    return 'timer';
  };

  const answeredCount = Object.keys(answers).length;

  if (!started) {
    return (
      <div className="exam-intro card">
        <h2>Practice Exam</h2>
        <p>
          Simulate the real Florida 2-20 General Lines exam experience.
          You'll have 3 hours to complete 160 questions.
        </p>

        <div className="exam-details">
          <div className="exam-detail">
            <span>Questions</span>
            <span>160</span>
          </div>
          <div className="exam-detail">
            <span>Time Limit</span>
            <span>3 hours</span>
          </div>
          <div className="exam-detail">
            <span>Passing Score</span>
            <span>70%</span>
          </div>
          <div className="exam-detail">
            <span>Format</span>
            <span>Multiple Choice</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn-secondary" onClick={onBack}>
            Cancel
          </button>
          <button className="btn-primary" onClick={startExam}>
            Start Exam
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = examQuestions[currentIndex];

  return (
    <div className="quiz-container">
      <div className={getTimerClass()}>
        {formatTime(timeRemaining)}
      </div>

      <div className="quiz-header">
        <div>
          <button className="btn-secondary" onClick={() => setShowConfirm(true)}>
            End Exam
          </button>
        </div>
        <div className="quiz-progress">
          <span className="quiz-progress-text">
            Question {currentIndex + 1} of {examQuestions.length} | {answeredCount} answered
          </span>
          <div className="progress-bar quiz-progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${(answeredCount / examQuestions.length) * 100}%`,
                backgroundColor: 'var(--primary-light)'
              }}
            />
          </div>
        </div>
      </div>

      <div className="card question-card">
        <div className="question-meta">
          <span className="question-tag">{TOPICS[currentQuestion.topic]?.name}</span>
          <span className="question-tag">Q{currentIndex + 1}</span>
        </div>
        <p className="question-text">{currentQuestion.question}</p>

        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`option ${answers[currentQuestion.id] === index ? 'selected' : ''}`}
              onClick={() => handleAnswer(currentQuestion.id, index)}
            >
              <span className="option-letter">
                {String.fromCharCode(65 + index)}
              </span>
              <span>{option}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="quiz-actions" style={{ justifyContent: 'space-between' }}>
        <button
          className="btn-secondary"
          onClick={() => setCurrentIndex(prev => prev - 1)}
          disabled={currentIndex === 0}
        >
          ← Previous
        </button>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {examQuestions.map((q, i) => (
            <button
              key={q.id}
              style={{
                width: '32px',
                height: '32px',
                padding: 0,
                fontSize: '0.75rem',
                backgroundColor: answers[q.id] !== undefined
                  ? 'var(--primary)'
                  : i === currentIndex
                    ? 'var(--bg-card-hover)'
                    : 'var(--bg-card)',
                border: i === currentIndex ? '2px solid var(--primary-light)' : '1px solid var(--border)',
                color: answers[q.id] !== undefined ? 'white' : 'var(--text-secondary)'
              }}
              onClick={() => setCurrentIndex(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {currentIndex === examQuestions.length - 1 ? (
          <button className="btn-success" onClick={() => setShowConfirm(true)}>
            Submit Exam
          </button>
        ) : (
          <button
            className="btn-primary"
            onClick={() => setCurrentIndex(prev => prev + 1)}
          >
            Next →
          </button>
        )}
      </div>

      {showConfirm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 200
        }}>
          <div className="card" style={{ maxWidth: '400px', textAlign: 'center' }}>
            <h3>Submit Exam?</h3>
            <p style={{ color: 'var(--text-secondary)', margin: '1rem 0' }}>
              You have answered {answeredCount} of {examQuestions.length} questions.
              {answeredCount < examQuestions.length && (
                <span style={{ color: 'var(--warning)', display: 'block', marginTop: '0.5rem' }}>
                  {examQuestions.length - answeredCount} questions are unanswered!
                </span>
              )}
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn-secondary" onClick={() => setShowConfirm(false)}>
                Continue Exam
              </button>
              <button className="btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PracticeExam;
