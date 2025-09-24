// Using the static library keeps the UI testable without depending on a backend.
import { sampleLibrary } from "../data/sampleLibrary.js";

/**
 * Placeholder scoring that keeps the app running without a backend.
 * Replace with a real recommendation algorithm or integration later.
 */
export function scoreTrack(track, preferences) {
  // TODO: incorporate real scoring logic (API, ML model, etc.).
  let score = 0;

  if (!preferences) return score;

  // Start with very simple point boosts so the ranking feels responsive.
  if (preferences.mood && track.mood === preferences.mood) {
    score += 5;
  }

  if (preferences.genre && track.genre.toLowerCase() === preferences.genre.toLowerCase()) {
    score += 3;
  }

  const { tempoMin, tempoMax } = preferences;
  if (tempoMin || tempoMax) {
    const min = Number(tempoMin) || 0;
    const max = Number(tempoMax) || Number.POSITIVE_INFINITY;
    if (track.tempo >= min && track.tempo <= max) {
      score += 2;
    }
  }

  // TODO: consider weighting artist familiarity, release year, etc., once data exists.

  return score;
}

export async function getRecommendations(preferences) {
  // TODO: fetch data from a real endpoint when available.
  const scored = sampleLibrary
    .map((track) => ({ track, score: scoreTrack(track, preferences) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  // TODO: expose pagination or load-more controls when the dataset grows.
  return scored.map((entry) => entry.track);
}
