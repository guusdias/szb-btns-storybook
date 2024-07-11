const languageSelector = document.getElementById("language-selector");
const patternBtnsId = ["third"];

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
          `#${id} button#szb-vfr-button div`
        );
        const chartButton = document.querySelector(
          `#${id} button#szb-chart-button`
        );

        if (vfrButton) {
          vfrButton.textContent = data.vfr.whatsYourSize;
        }
        if (chartButton) {
          chartButton.textContent = data.chart.sizeGuide;
        }
      });
    })
    .catch((error) => console.error("Error loading translations:", error));
}

updateTexts(languageSelector.value);

languageSelector.addEventListener("change", (event) => {
  updateTexts(event.target.value);
});
