const languageSelector = document.getElementById("language-selector");
const patternBtnsId = ["thirteenth"];

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
          vfrButton.querySelector("#title-sizebay").textContent =
            data.others.enjoyTheFittingRoom;

          vfrButton.querySelector("#text-sizebay").textContent =
            data.others.howToUseFittingRoom;

          vfrButton.querySelector("#szb-vfr-button").textContent =
            data.vfr.fittingRoom;
        }
      });
    })
    .catch((error) => console.error("Error loading translations:", error));
}

updateTexts(languageSelector.value);

languageSelector.addEventListener("change", (event) => {
  updateTexts(event.target.value);
});
