// FSRS-lite: Simplified Free Spaced Repetition Scheduler
// Based on the three-component model: Retrievability, Stability, Difficulty

import { getSpacedRepData, saveSpacedRepData } from './storage';

// Rating scale: 1 = Again, 2 = Hard, 3 = Good, 4 = Easy
const RATING = {
  AGAIN: 1,  // Complete blackout, wrong answer
  HARD: 2,   // Correct but very difficult
  GOOD: 3,   // Correct with moderate effort
  EASY: 4    // Correct with no hesitation
};

// Default parameters (can be tuned)
const PARAMS = {
  w: [0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49, 0.14, 0.94, 2.18, 0.05, 0.34, 1.26, 0.29, 2.61],
  requestRetention: 0.85, // Target 85% retention
  maximumInterval: 365,
  easyBonus: 1.3,
  hardInterval: 1.2
};

// Initialize card state for a new question
function initCard() {
  return {
    difficulty: 0.3,     // Initial difficulty
    stability: 0,        // Time for retention to drop to 90%
    reps: 0,             // Number of reviews
    lapses: 0,           // Number of times forgotten
    lastReview: null,    // Last review timestamp
    nextReview: Date.now(), // When to review next
    interval: 0          // Current interval in days
  };
}

// Calculate new difficulty based on rating
function updateDifficulty(d, rating) {
  const newD = d - PARAMS.w[6] * (rating - 3);
  return Math.min(Math.max(newD, 0), 1); // Clamp between 0 and 1
}

// Calculate new stability
function updateStability(s, d, rating, reps) {
  if (reps === 0) {
    // First review - use initial stability based on rating
    const initialStability = [0.5, 1, 2.5, 5.5][rating - 1];
    return initialStability;
  }

  if (rating === RATING.AGAIN) {
    // Forgotten - stability drops significantly
    return Math.max(PARAMS.w[11] * Math.pow(s, -PARAMS.w[12]) * (Math.exp(PARAMS.w[13] * (1 - d)) - 1), 0.5);
  }

  // Successful recall - increase stability
  const hardPenalty = rating === RATING.HARD ? PARAMS.w[15] : 1;
  const easyBonus = rating === RATING.EASY ? PARAMS.w[16] : 1;

  return s * (1 + Math.exp(PARAMS.w[8]) * (11 - d) * Math.pow(s, -PARAMS.w[9]) * (Math.exp(PARAMS.w[10] * (1 - retrievability(s))) - 1)) * hardPenalty * easyBonus;
}

// Calculate retrievability (probability of recall)
function retrievability(stability, daysSinceReview = 0) {
  if (stability === 0) return 0;
  return Math.pow(0.9, daysSinceReview / stability);
}

// Calculate next interval based on stability and target retention
function nextInterval(stability) {
  const interval = stability * Math.log(PARAMS.requestRetention) / Math.log(0.9);
  return Math.min(Math.max(Math.round(interval), 1), PARAMS.maximumInterval);
}

// Review a card and update its state
export function reviewCard(questionId, rating, isCorrect) {
  const data = getSpacedRepData();
  let card = data[questionId] || initCard();

  // Calculate days since last review
  const now = Date.now();
  const daysSinceReview = card.lastReview
    ? (now - card.lastReview) / (1000 * 60 * 60 * 24)
    : 0;

  // Determine rating from answer
  const effectiveRating = isCorrect ? (rating || RATING.GOOD) : RATING.AGAIN;

  // Update card state
  card.difficulty = updateDifficulty(card.difficulty, effectiveRating);
  card.stability = updateStability(card.stability, card.difficulty, effectiveRating, card.reps);

  if (effectiveRating === RATING.AGAIN) {
    card.lapses++;
    card.reps = 0; // Reset reps on lapse
  } else {
    card.reps++;
  }

  // Calculate next review time
  card.interval = nextInterval(card.stability);
  card.lastReview = now;
  card.nextReview = now + (card.interval * 24 * 60 * 60 * 1000);

  // Save updated data
  data[questionId] = card;
  saveSpacedRepData(data);

  return card;
}

// Get questions due for review
export function getDueQuestions(questionIds) {
  const data = getSpacedRepData();
  const now = Date.now();

  return questionIds.filter(id => {
    const card = data[id];
    if (!card) return true; // New card, always due
    return card.nextReview <= now;
  });
}

// Get questions sorted by priority (most urgent first)
export function getPriorityQuestions(questionIds) {
  const data = getSpacedRepData();
  const now = Date.now();

  return [...questionIds].sort((a, b) => {
    const cardA = data[a];
    const cardB = data[b];

    // New cards have high priority
    if (!cardA && !cardB) return 0;
    if (!cardA) return -1;
    if (!cardB) return 1;

    // Sort by how overdue (more overdue = higher priority)
    const overdueA = now - cardA.nextReview;
    const overdueB = now - cardB.nextReview;

    return overdueB - overdueA;
  });
}

// Get weak topics (topics with low stability cards)
export function getWeakTopics(questions) {
  const data = getSpacedRepData();
  const topicStats = {};

  questions.forEach(q => {
    const card = data[q.id];
    if (!topicStats[q.topic]) {
      topicStats[q.topic] = { total: 0, weak: 0, avgStability: 0 };
    }

    topicStats[q.topic].total++;

    if (card) {
      topicStats[q.topic].avgStability += card.stability;
      if (card.stability < 5 || card.lapses > 2) {
        topicStats[q.topic].weak++;
      }
    } else {
      topicStats[q.topic].weak++; // Unreviewed = weak
    }
  });

  // Calculate averages and sort by weakness
  return Object.entries(topicStats)
    .map(([topic, stats]) => ({
      topic,
      weakness: stats.weak / stats.total,
      avgStability: stats.avgStability / stats.total
    }))
    .sort((a, b) => b.weakness - a.weakness);
}

export { RATING };
