const languageSelector = document.getElementById("language-selector");
const patternBtnsId = [
  "first",
  "second",
  "fifth",
  "sixth",
  "nineth",
  "seventeenth",
  "twentieth",
  "fourth",
  "twenty-fourth",
];

function updateTexts(language) {
  const url = `translations/${language}.json`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      patternBtnsId.forEach((id) => {
        const vfrButton = document.querySelector(
          `#${id} button#szb-vfr-button`
        );
        const chartButton = document.querySelector(
          `#${id} button#szb-chart-button`
        );

        if (vfrButton) {
          vfrButton.textContent = data.vfr.findYourSize;
        }
        if (chartButton) {
          chartButton.textContent = data.chart.measurementTable;
        }
      });
    })
    .catch((error) => console.error("Error loading translations:", error));
}

updateTexts(languageSelector.value);

languageSelector.addEventListener("change", (event) => {
  updateTexts(event.target.value);
});
