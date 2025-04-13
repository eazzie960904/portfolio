const footerInput = document.querySelector(".footerInput");
const footerButton = document.querySelector(".footerButton");

footerButton.addEventListener("click", footerButtonClick);

function footerButtonClick() {
  footerInput.value = "";
}

const button = document.querySelector("button");
const dialog = document.querySelector("dialog");

button.addEventListener("click", () => {
  dialog.showModal();
});
