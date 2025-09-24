# Fall 2025 DevSprint StarterStubs: Song Recommendation Web App
- Theme: Music 

## Program Context
- ACM Introduces: the DevSprint program! If you are looking for resume-building developer experience with current tools in a low-stakes, collaborative, constructive, and growth-centered environment, this is the place for you! Working on a 4-week rotation between projects and workshops, students will have the opportunity to build and present up to 3 unique, 2-week-long projects. Hope to see you there learning, building, and failing with style 😎

## Sprint #1 Prompt
- Your client is asking for a new feature for their music company. Attached are stubs for an example web-app project that recommends songs.

## Repository Layout
- `src/index.html` — minimal HTML shell that loads the JavaScript modules.
- `src/main.js` — entry point that wires services to UI hooks.
- `src/services/recommendationService.js` — placeholder service for fetching recommendations.
- `src/services/userPreferencesService.js` — placeholder service for persisting user settings.
- `src/ui/render.js` — placeholder view helpers for rendering the page.
- `src/data/sampleLibrary.js` — demo data to keep the stubs running offline.
- `docs/sprint-brief.md` — condensed copy of the description and prompt plus tasks to tackle next.

## Getting Started
1. **Star and fork the repo.** On GitHub, click ⭐ "Star" to bookmark the project and hit "Fork" so you can push changes to your own copy.
2. **Get the files onto your computer.** Click the green `<> Code` button on GitHub, choose "Download ZIP", and unzip it somewhere easy to find (e.g., your Desktop). Alternatively, if you already know Git, clone the repo instead.
3. **Install a friendly code editor.** [VS Code](https://code.visualstudio.com/) is free and works on macOS, Windows, and Linux. Install it if you don't already have a preferred editor.
4. **Open the project folder.** Launch your editor, pick `File → Open Folder…`, and select the unzipped `studious-spoon` directory. You should now see the `src`, `docs`, and other folders in the sidebar.
5. **Preview the starter app.**
   - Easiest: drag `src/index.html` into a modern browser (Chrome, Edge, Firefox, Safari) and the stub UI will render immediately.
   - Recommended: install the "Live Server" extension in VS Code, then click "Go Live" to auto-refresh when files change. This avoids manual refreshes.
6. **Skim the TODOs.** Every file already contains `TODO:` markers and short comments. Start with `src/main.js` and `src/services/*` to understand where you can plug in your ideas.
7. **Edit one thing at a time.** Make a tiny change (for example, tweak the sample data in `src/data/sampleLibrary.js`), flip back to the browser, and confirm the result. This builds confidence as you go.
8. **Document your progress.** Use `docs/sprint-brief.md` to note what you tried, what worked, and what you'd like to improve next.

## Suggested Next Steps
- Jot down 2-3 user stories in `docs/sprint-brief.md` that describe who needs recommendations and what “success” looks like for them. A user story is just a single sentence in plain language (e.g., "As a commuter, I want upbeat playlists so that my morning drive feels energizing.") that has the focus on the person using the app/program.
- Sketch (paper is fine) the screens or states you expect: what does the app show before input, after recommendations, and after a like/skip?
- Outline a simple recommendation approach (e.g., “match mood + genre”) and note open questions you need answered before coding.
- Decide how you want to store preferences for now (keep `localStorage` or swap it) and list the pros/cons that matter to you.
- ***Pick one small improvement to build first*** and plan how you will test it manually.

## Beginner-Friendly Resources
- [MDN Web Docs — Getting started with the web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)
- [Scrimba — Learn JavaScript for free](https://scrimba.com/learn/learnjavascript)
- [freeCodeCamp — JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [MDN — FormData API](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [MDN — addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN — Working with objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
- [MDN — Array methods guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
- [MDN — Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Web Dev Simplified — Fetch API basics (YouTube)](https://youtu.be/PoRJizFvM7s)
- [MDN — Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN — Template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
- [MDN — DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)
- [JavaScript.info — Modern JavaScript Tutorial](https://javascript.info/)
- [Frontend Mentor — Newbie challenges](https://www.frontendmentor.io/challenges?difficulties=1)
