const languageSelector = document.getElementById("language-selector");
const patternBtnsId = ["eighth"];

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
          vfrButton.querySelector(".size-text").textContent =
            data.vfr.whatsYourSize;

          vfrButton.querySelector(".szb__vfr--text > b").textContent =
            data.others.checkItOut;

          vfrButton.querySelector(".custom-box-vfr").textContent =
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
