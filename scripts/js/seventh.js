const languageSelector = document.getElementById("language-selector");
const patternBtnsId = ["seventh"];

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
          vfrButton.querySelector("#szb-vfr-button").textContent =
            data.vfr.useVirtualFittingRoom;

          vfrButton.querySelector(".sizebay-text").textContent =
            data.others.findThePerfectSize;

          vfrButton.querySelector(".szb-fit__text").textContent =
            data.others.sizeInOneMinute;

          vfrButton.querySelector(".szb__span--text").textContent =
            data.chart.orSizeGuide;
        }
      });
    })
    .catch((error) => console.error("Error loading translations:", error));
}

updateTexts(languageSelector.value);

languageSelector.addEventListener("change", (event) => {
  updateTexts(event.target.value);
});
