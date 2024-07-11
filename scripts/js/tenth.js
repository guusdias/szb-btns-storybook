const languageSelector = document.getElementById("language-selector");
const patternBtnsId = ["tenth"];

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
          vfrButton.querySelector(
            ".custom-box-vfr > p:first-child"
          ).textContent = data.others.exploreOurFittingRoom;

          vfrButton.querySelector("b#size-fit-button").textContent =
            data.vfr.virtualFittingRoom;

          vfrButton.querySelector(
            ".custom-box-vfr > p:last-child"
          ).textContent = data.others.findingYourCorrectSize;
        }
      });
    })
    .catch((error) => console.error("Error loading translations:", error));
}

updateTexts(languageSelector.value);

languageSelector.addEventListener("change", (event) => {
  updateTexts(event.target.value);
});
