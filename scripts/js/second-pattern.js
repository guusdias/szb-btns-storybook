const languageSelector = document.getElementById("language-selector");
const patternBtnsId = [
  "sixteenth",
  "nineteenth",
  "twenty-second",
  "eighteenth",
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
        const vfrButton = document.querySelector(`#${id}`);

        if (vfrButton) {
          vfrButton.querySelector("#szb-vfr-button  span").textContent =
            data.vfr.findYourSize;

          vfrButton.querySelector("#szb-chart-button  span").textContent =
            data.chart.sizeGuide;

          //changing 21 styles
          document.querySelector(
            "#twenty-first #szb-vfr-button span"
          ).textContent = data.vfr.fittingRoom;
        }
      });
    })
    .catch((error) => console.error("Error loading translations:", error));
}

updateTexts(languageSelector.value);

languageSelector.addEventListener("change", (event) => {
  updateTexts(event.target.value);
});
