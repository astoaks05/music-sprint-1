const recommendationsOutput = document.querySelector("#recommendations-output");
const template = document.querySelector("#recommendation-template");

export function renderRecommendations(recommendations = []) {
  if (!recommendationsOutput) return;

  if (!recommendations.length) {
    recommendationsOutput.classList.add("recommendations-empty");
    recommendationsOutput.innerHTML = "<p>No recommendations yet. Adjust your filters and try again.</p>";
    return;
  }

  recommendationsOutput.classList.remove("recommendations-empty");
  recommendationsOutput.innerHTML = "";

  const fragment = document.createDocumentFragment();

  recommendations.forEach((track) => {
    const card = template.content.cloneNode(true);
    card.querySelector('[data-field="title"]').textContent = track.title;
    card.querySelector('[data-field="artist"]').textContent = track.artist;
    card.querySelector('[data-field="genre"]').textContent = track.genre;
    card.querySelector('[data-field="tempo"]').textContent = track.tempo;

    // TODO: wire buttons to analytics, preference learning, etc.

    fragment.appendChild(card);
  });

  recommendationsOutput.appendChild(fragment);
}
