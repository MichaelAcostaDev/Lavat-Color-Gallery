const search = document.getElementById("search");
const cards = [...document.querySelectorAll(".card")];
const count = document.getElementById("count");

function filter() {
  const term = search.value.trim().toLowerCase();
  let visible = 0;

  cards.forEach((card) => {
    const match = card.dataset.name.includes(term);
    card.hidden = !match;
    if (match) visible++;
  });

  count.textContent = `${visible} pattern${visible === 1 ? "" : "s"}`;
}

search.addEventListener("input", filter);

document.querySelectorAll(".command").forEach((command) => {
  command.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(command.textContent.trim());
      const original = command.textContent;
      command.textContent = "Copied to clipboard";
      setTimeout(() => (command.textContent = original), 900);
    } catch (_) {
      // Clipboard access may be unavailable in some browsers.
    }
  });
});
