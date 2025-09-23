# DevSprint Stubs:
# Song Recommendation Web App

## Program Context
- ACM Introduces: the DevSprint program! If you are looking for resume-building developer experience with current tools in a low-stakes, collaborative, constructive, and growth-centered environment, this is the place for you! Working on a 4-week rotation between projects and workshops, students will have the opportunity to build and present up to 3 unique, 2-week-long projects. Our first program meeting is this upcoming Wednesday after the ACM Meeting on September 10th. Hope to see you there learning, building, and failing with style 😎

## Sprint Prompt
- The client is asking for a new feature for their music company. Attached are stubs for an example web-app project that recommends songs.

## Repository Layout
- `src/index.html` — minimal HTML shell that loads the JavaScript modules.
- `src/main.js` — entry point that wires services to UI hooks.
- `src/services/recommendationService.js` — placeholder service for fetching recommendations.
- `src/services/userPreferencesService.js` — placeholder service for persisting user settings.
- `src/ui/render.js` — placeholder view helpers for rendering the page.
- `src/data/sampleLibrary.js` — demo data to keep the stubs running offline.
- `docs/sprint-brief.md` — condensed copy of the description and prompt plus tasks to tackle next.

## Getting Started
1. Open `src/index.html` in your browser to view the stub experience.
2. Fill in the `TODO` notes across the modules to connect real data and flesh out interactions.
3. Replace the sample data set with a live API or richer mock data as you iterate.

## Suggested Next Steps
- Jot down 2-3 user stories in `docs/sprint-brief.md` that describe who needs recommendations and what “success” looks like for them. A user story is just a single sentence in plain language (e.g., "As a commuter, I want upbeat playlists so that my morning drive feels energizing.") that has the focus on the person using the app/program.
- Sketch (paper is fine) the screens or states you expect: what does the app show before input, after recommendations, and after a like/skip?
- Outline a simple recommendation approach (e.g., “match mood + genre”) and note open questions you need answered before coding.
- Decide how you want to store preferences for now (keep `localStorage` or swap it) and list the pros/cons that matter to you.
- ***Pick one small improvement to build first*** and plan how you will test it manually.
