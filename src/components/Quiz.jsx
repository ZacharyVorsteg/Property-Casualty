import { useState, useEffect } from 'react';
import { questions, TOPICS, getQuestionsByTopic } from '../data/questions';
import { lessons, getLessonById } from '../data/lessons';
import { recordAnswer } from '../utils/storage';
import { reviewCard, getPriorityQuestions } from '../utils/spacedRep';

function Quiz({ topicId, onBack, onLessonSelect, onProgressUpdate }) {
  const [topicQuestions, setTopicQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [sessionStats, setSessionStats] = useState({ correct: 0, total: 0 });

  useEffect(() => {
    // Get questions for topic and sort by spaced repetition priority
    const tq = getQuestionsByTopic(topicId);
    const questionIds = tq.map(q => q.id);
    const prioritized = getPriorityQuestions(questionIds);
    const sorted = prioritized.map(id => tq.find(q => q.id === id));
    setTopicQuestions(sorted);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  }, [topicId]);

  const currentQuestion = topicQuestions[currentIndex];
  const topic = TOPICS[topicId];

  const handleAnswer = (index) => {
    if (showExplanation) return;

    setSelectedAnswer(index);
    setShowExplanation(true);

    const isCorrect = index === currentQuestion.correct;

    // Record in storage
    recordAnswer(topicId, isCorrect, currentQuestion.id);

    // Update spaced repetition
    reviewCard(currentQuestion.id, isCorrect ? 3 : 1, isCorrect);

    // Update session stats
    setSessionStats(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));

    onProgressUpdate?.();
  };

  const handleNext = () => {
    if (currentIndex < topicQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleStudyLesson = () => {
    if (currentQuestion?.lessonId) {
      onLessonSelect(currentQuestion.lessonId);
    }
  };

  if (!currentQuestion) {
    return (
      <div className="quiz-container">
        <div className="card" style={{ textAlign: 'center' }}>
          <h2>No questions available</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Select a different topic or check back later.
          </p>
          <button className="btn-primary" onClick={onBack} style={{ marginTop: '1rem' }}>
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const getOptionClass = (index) => {
    if (!showExplanation) {
      return selectedAnswer === index ? 'selected' : '';
    }
    if (index === currentQuestion.correct) return 'correct';
    if (index === selectedAnswer && selectedAnswer !== currentQuestion.correct) return 'incorrect';
    return '';
  };

  const isCorrect = selectedAnswer === currentQuestion.correct;
  const progressPercent = ((currentIndex + 1) / topicQuestions.length) * 100;
  const sessionAccuracy = sessionStats.total > 0
    ? Math.round((sessionStats.correct / sessionStats.total) * 100)
    : 0;

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div>
          <button className="btn-secondary" onClick={onBack}>
            ← Back
          </button>
        </div>
        <div className="quiz-progress">
          <span className="quiz-progress-text">
            {currentIndex + 1} of {topicQuestions.length} | {sessionAccuracy}% this session
          </span>
          <div className="progress-bar quiz-progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%`, backgroundColor: 'var(--primary-light)' }}
            />
          </div>
        </div>
      </div>

      <div className="card question-card">
        <div className="question-meta">
          <span className="question-tag">{topic?.name}</span>
          <span className="question-tag">{topic?.weight}% of exam</span>
        </div>
        <p className="question-text">{currentQuestion.question}</p>

        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`option ${getOptionClass(index)}`}
              onClick={() => handleAnswer(index)}
              disabled={showExplanation}
            >
              <span className="option-letter">
                {String.fromCharCode(65 + index)}
              </span>
              <span>{option}</span>
            </button>
          ))}
        </div>
      </div>

      {showExplanation && (
        <div className={`card explanation-card ${isCorrect ? 'correct' : 'incorrect'}`}>
          <div className="explanation-header">
            {isCorrect ? (
              <span style={{ color: 'var(--success)' }}>✓ Correct!</span>
            ) : (
              <span style={{ color: 'var(--danger)' }}>✗ Incorrect</span>
            )}
          </div>
          <p className="explanation-text">{currentQuestion.explanation}</p>

          <div className="quiz-actions">
            {!isCorrect && currentQuestion.lessonId && (
              <button className="btn-primary" onClick={handleStudyLesson}>
                Study This Topic
              </button>
            )}
            {currentIndex < topicQuestions.length - 1 ? (
              <button className="btn-success" onClick={handleNext}>
                Next Question →
              </button>
            ) : (
              <button className="btn-success" onClick={onBack}>
                Finish Topic
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
