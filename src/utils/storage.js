// LocalStorage utilities for persisting progress

const STORAGE_KEYS = {
  PROGRESS: 'fl_pc_progress',
  SETTINGS: 'fl_pc_settings',
  QUIZ_HISTORY: 'fl_pc_history',
  SPACED_REP: 'fl_pc_spaced_rep'
};

// Get progress for all topics
export function getProgress() {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return stored ? JSON.parse(stored) : getDefaultProgress();
  } catch {
    return getDefaultProgress();
  }
}

// Save progress
export function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
}

// Get default progress structure
function getDefaultProgress() {
  return {
    totalAnswered: 0,
    totalCorrect: 0,
    streakDays: [],
    lastStudyDate: null,
    topics: {
      'terms-concepts': { answered: 0, correct: 0, mastery: 0 },
      'policy-provisions': { answered: 0, correct: 0, mastery: 0 },
      'casualty-policies': { answered: 0, correct: 0, mastery: 0 },
      'motor-vehicle': { answered: 0, correct: 0, mastery: 0 },
      'florida-statutes': { answered: 0, correct: 0, mastery: 0 },
      'agent-licensing': { answered: 0, correct: 0, mastery: 0 },
      'residual-markets': { answered: 0, correct: 0, mastery: 0 },
      'mechanical-breakdown': { answered: 0, correct: 0, mastery: 0 }
    },
    examHistory: []
  };
}

// Record a quiz answer
export function recordAnswer(topicId, isCorrect, questionId) {
  const progress = getProgress();

  progress.totalAnswered++;
  if (isCorrect) progress.totalCorrect++;

  if (progress.topics[topicId]) {
    progress.topics[topicId].answered++;
    if (isCorrect) progress.topics[topicId].correct++;

    // Calculate mastery (weighted average with recency bias)
    const topic = progress.topics[topicId];
    topic.mastery = Math.round((topic.correct / topic.answered) * 100);
  }

  // Update streak
  const today = new Date().toDateString();
  if (progress.lastStudyDate !== today) {
    progress.streakDays.push(today);
    // Keep last 30 days
    if (progress.streakDays.length > 30) {
      progress.streakDays = progress.streakDays.slice(-30);
    }
    progress.lastStudyDate = today;
  }

  saveProgress(progress);
  return progress;
}

// Record exam result
export function recordExamResult(result) {
  const progress = getProgress();
  progress.examHistory.push({
    date: new Date().toISOString(),
    score: result.score,
    passed: result.passed,
    breakdown: result.breakdown
  });

  // Keep last 10 exams
  if (progress.examHistory.length > 10) {
    progress.examHistory = progress.examHistory.slice(-10);
  }

  saveProgress(progress);
  return progress;
}

// Get spaced repetition data
export function getSpacedRepData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.SPACED_REP);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

// Save spaced repetition data
export function saveSpacedRepData(data) {
  try {
    localStorage.setItem(STORAGE_KEYS.SPACED_REP, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save spaced rep data:', e);
  }
}

// Reset all progress
export function resetProgress() {
  localStorage.removeItem(STORAGE_KEYS.PROGRESS);
  localStorage.removeItem(STORAGE_KEYS.SPACED_REP);
  localStorage.removeItem(STORAGE_KEYS.QUIZ_HISTORY);
}
