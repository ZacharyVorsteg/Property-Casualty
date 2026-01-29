import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import Lesson from './components/Lesson';
import Progress from './components/Progress';
import PracticeExam from './components/PracticeExam';
import Results from './components/Results';
import StudyGuide from './components/StudyGuide';
import { getProgress } from './utils/storage';
import { TOPICS } from './data/questions';

function App() {
  const [view, setView] = useState('dashboard');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [examResults, setExamResults] = useState(null);
  const [progress, setProgress] = useState(getProgress());

  // Refresh progress when returning to dashboard
  useEffect(() => {
    if (view === 'dashboard') {
      setProgress(getProgress());
    }
  }, [view]);

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(topicId);
    setView('quiz');
  };

  const handleLessonSelect = (lessonId) => {
    setSelectedLesson(lessonId);
    setView('lesson');
  };

  const handleExamComplete = (results) => {
    setExamResults(results);
    setView('results');
  };

  const handleBackToDashboard = () => {
    setSelectedTopic(null);
    setSelectedLesson(null);
    setExamResults(null);
    setProgress(getProgress());
    setView('dashboard');
  };

  const renderHeader = () => (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={handleBackToDashboard}>
          <span className="logo-icon">P&C</span>
          <span>Florida Exam Prep</span>
        </div>
        <nav className="nav">
          <button
            className={`nav-btn ${view === 'dashboard' ? 'active' : ''}`}
            onClick={handleBackToDashboard}
          >
            Topics
          </button>
          <button
            className={`nav-btn ${view === 'guide' ? 'active' : ''}`}
            onClick={() => setView('guide')}
          >
            Study Guide
          </button>
          <button
            className={`nav-btn ${view === 'exam' ? 'active' : ''}`}
            onClick={() => setView('exam')}
          >
            Exam
          </button>
          <button
            className={`nav-btn ${view === 'progress' ? 'active' : ''}`}
            onClick={() => { setProgress(getProgress()); setView('progress'); }}
          >
            Progress
          </button>
        </nav>
      </div>
    </header>
  );

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return (
          <Dashboard
            onTopicSelect={handleTopicSelect}
            progress={progress}
          />
        );
      case 'quiz':
        return (
          <Quiz
            topicId={selectedTopic}
            onBack={handleBackToDashboard}
            onLessonSelect={handleLessonSelect}
            onProgressUpdate={() => setProgress(getProgress())}
          />
        );
      case 'lesson':
        return (
          <Lesson
            lessonId={selectedLesson}
            onBack={() => setView(selectedTopic ? 'quiz' : 'dashboard')}
            onQuizSelect={() => setView('quiz')}
          />
        );
      case 'exam':
        return (
          <PracticeExam
            onBack={handleBackToDashboard}
            onComplete={handleExamComplete}
          />
        );
      case 'results':
        return (
          <Results
            results={examResults}
            onBack={handleBackToDashboard}
            onLessonSelect={handleLessonSelect}
            onRetake={() => setView('exam')}
          />
        );
      case 'progress':
        return (
          <Progress
            progress={progress}
            onTopicSelect={handleTopicSelect}
          />
        );
      case 'guide':
        return (
          <StudyGuide
            onTopicSelect={handleTopicSelect}
            onStartExam={() => setView('exam')}
          />
        );
      default:
        return <Dashboard onTopicSelect={handleTopicSelect} progress={progress} />;
    }
  };

  return (
    <>
      {renderHeader()}
      <main>
        {renderView()}
      </main>
    </>
  );
}

export default App;
