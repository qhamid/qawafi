const randomNumberButton = document.querySelector("#random-number");
const body = document.body;

randomNumberButton.addEventListener("click", () => {
  const randomNumber = getRandomNumber(1, 6);
  const randomNumberPopup = document.querySelector(".random-number-popup");
  if (!randomNumberPopup) {
    const htmlElement = `<div class="random-number-popup">
    <div class="container">
    <h2>:السؤال رقم</h2>
    <span class="number">${randomNumber}</span>
    <span id="close-random-number">
        <span id="close">
        </span>
        </span>
        </div>
        </div>`;

    body.insertAdjacentHTML("beforeend", htmlElement);
    const randomNumberPopup = document.querySelector(".random-number-popup");
    const close = document.querySelector("#close-random-number");
    close.addEventListener("click", () => {
      randomNumberPopup.classList.add("hide");
      setTimeout(() => {
        body.removeChild(randomNumberPopup);
      }, 500);
    });
  }
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
