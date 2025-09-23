import { getRecommendations } from "./services/recommendationService.js";
import { loadPreferences, savePreferences } from "./services/userPreferencesService.js";
import { renderRecommendations } from "./ui/render.js";

const form = document.querySelector("#preferences-form");

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
  const preferences = Object.fromEntries(formData.entries());

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

  form.addEventListener("submit", handleSubmit);

  if (savedPreferences) {
    handleSubmit(new Event("submit"));
  }
}

bootstrap();
