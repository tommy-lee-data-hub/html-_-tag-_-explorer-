document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const search = document.getElementById("tag-search");
  const tagItems = Array.from(document.querySelectorAll(".tag-item"));
  const noResults = document.getElementById("no-results");

  if (search) {
    search.addEventListener("input", () => {
      const query = search.value.trim().toLowerCase();
      let visible = 0;
      tagItems.forEach((item) => {
        const matches = item.textContent.toLowerCase().includes(query);
        item.hidden = !matches;
        if (matches) visible++;
      });
      if (noResults) noResults.hidden = visible !== 0;
    });
  }

  const form = document.getElementById("learning-form");
  const output = document.getElementById("form-output");
  if (form && output) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("learner-name").value.trim();
      const level = document.getElementById("learner-level").value;
      const goal = document.getElementById("learner-goal").value.trim();
      const levelText = {
        beginner: "Start with HTML structure and common tags",
        practising: "Practise semantic HTML, forms, and tables",
        building: "Plan your pages, then add responsive CSS and JavaScript"
      }[level];
      output.textContent = `${name ? `Great, ${name}! ` : "Great! "}${levelText}.${goal ? ` Your project idea: ${goal}` : ""}`;
    });
  }

  const quizButtons = document.querySelectorAll(".quiz-option");
  const feedback = document.getElementById("quiz-feedback");
  quizButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!feedback) return;
      const correct = button.dataset.answer === "correct";
      feedback.textContent = correct
        ? "Correct! The <a> element creates a hyperlink."
        : "Not quite. The correct answer is <a>.";
      quizButtons.forEach((option) => {
        option.setAttribute("aria-pressed", String(option === button));
      });
    });
  });
});