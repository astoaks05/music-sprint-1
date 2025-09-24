// Namespaced key keeps our app from colliding with other localStorage entries.
const STORAGE_KEY = "devsprint-song-preferences";

export function loadPreferences() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    // TODO: introduce schema validation to catch stale or malformed saves.
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.warn("Failed to load preferences", error);
    return null;
  }
}

export function savePreferences(preferences) {
  // TODO: replace localStorage with project-approved persistence.
  try {
    // Store as JSON so we can add more fields later without changing the format.
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.warn("Failed to save preferences", error);
  }
}
