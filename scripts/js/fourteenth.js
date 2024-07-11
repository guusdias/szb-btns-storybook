const languageSelector = document.getElementById("language-selector");
const patternBtnsId = ["fourteenth"];

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
        const vfrButton = document.querySelector(`#${id}`);

        if (vfrButton) {
          vfrButton.querySelector(".szb__span--text").textContent =
            data.others.needHelp;

          vfrButton.querySelector(".szb__vfr-button").textContent =
            data.vfr.findYourSize;

          vfrButton.querySelector(".szb__chart-button > div").textContent =
            data.chart.sizeGuide;
        }
      });
    })
    .catch((error) => console.error("Error loading translations:", error));
}

updateTexts(languageSelector.value);

languageSelector.addEventListener("change", (event) => {
  updateTexts(event.target.value);
});
