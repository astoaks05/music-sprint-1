const STORAGE_KEY = "devsprint-song-preferences";

export function loadPreferences() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.warn("Failed to load preferences", error);
    return null;
  }
}

export function savePreferences(preferences) {
  // TODO: replace localStorage with project-approved persistence.
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.warn("Failed to save preferences", error);
  }
}
