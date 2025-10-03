import { getRecommendations } from "./services/recommendationService.js";
import { loadPreferences, savePreferences } from "./services/userPreferencesService.js";
import { renderRecommendations } from "./ui/render.js";

// Cache the form once so we do not keep querying the DOM on every submit.
const form = document.querySelector("#preferences-form");

const base = 'https://www.theaudiodb.com/api/v1/json'
const apiKey = '123'
const artist = prompt('Which artist would you like to search for?')

async function getMacMillerData() {
  try {
    
    const response = await fetch(`${base}/${apiKey}/search.php?s=${artist}`);

    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);

  } catch (error) {
    console.error('Could not fetch data:', error);
  }
}

getMacMillerData();

/**
 * Copy previously saved values back into the form controls.
 * TODO: Extend this once new preference fields are added to the UI.
 */
function hydrateForm(preferences) {
  if (!preferences) return;
  form.mood.value = preferences.mood ?? "";
  form.genre.value = preferences.genre ?? "";
  form.tempoMin.value = preferences.tempoMin ?? "";
  form.tempoMax.value = preferences.tempoMax ?? "";
}

async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  // Convert the entries iterator into a plain object we can persist and score with.
  const preferences = Object.fromEntries(formData.entries());

  // TODO: add lightweight validation to guard against impossible ranges (e.g., tempoMin > tempoMax).
  savePreferences(preferences);

  try {
    const recommendations = await getRecommendations(preferences);
    renderRecommendations(recommendations);
  } catch (error) {
    // TODO: surface a user-friendly error UI.
    console.error("Failed to load recommendations", error);
  }
}

function bootstrap() {
  const savedPreferences = loadPreferences();
  hydrateForm(savedPreferences);

  // TODO: allow live preview updates when inputs change, not just on submit.
  form.addEventListener("submit", handleSubmit);

  if (savedPreferences) {
    // Auto-run the recommendation once so returning users see immediate feedback.
    handleSubmit(new Event("submit"));
  }
}

bootstrap();
