const randomNumberButton = document.querySelector("#random-number");
const randomSurahButton = document.querySelector("#random-surah");
const body = document.body;

randomNumberButton.addEventListener("click", () => {
  const randomNumber = getRandomNumber(1, 40);
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

randomSurahButton.addEventListener("click", () => {
  const randomSurah = getRandomSurah(1, 40);
  const randomSurahPopup = document.querySelector(".random-surah-popup");
  if (!randomSurahPopup) {
    const htmlElement = `<div class="random-surah-popup">
    <div class="container">
    <h2>:السورة رقم</h2>
    <span class="number">${randomSurah}</span>
    <span id="close-random-surah">
        <span id="close">
        </span>
        </span>
        </div>
        </div>`;

    body.insertAdjacentHTML("beforeend", htmlElement);
    const randomSurahPopup = document.querySelector(".random-surah-popup");
    const close = document.querySelector("#close-random-surah");
    close.addEventListener("click", () => {
      randomSurahPopup.classList.add("hide");
      setTimeout(() => {
        body.removeChild(randomSurahPopup);
      }, 500);
    });
  }
});

// randomSurahButton.addEventListener("click", () => {
//   const randomSurah = getRandomSurah();
//   const randomSurahPopup = document.querySelector(".random-surah-popup");
//   if (!randomSurahPopup) {
//     const htmlElement = `<div class="random-surah-popup">
//     <div class="container">
//     <h2>:السورة هي</h2>
//         <span class="number">${randomSurah}</span>
//         <span id="close-random-surah">
//         <span id="close">
//         </span>
//         </span>
//       </div>
//       </div>`;

//     body.insertAdjacentHTML("beforeend", htmlElement);
//     const close = document.querySelector("#close-random-surah");
//     close.addEventListener("click", () => {
//       body.removeChild(document.querySelector(".random-surah-popup"));
//     });
//   }
// });

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomSurah() {
  const suras = [
    "البقرة",
    "آل عمران",
    "النساء",
    "المائدة",
    "الأنعام",
    "الأعراف",
    "الأنفال",
    "التوبة",
    "يونس",
    "هود",
    "يوسف",
    "الرعد",
    "إبراهيم",
    "الحجر",
    "النحل",
    "الإسراء",
    "الكهف",
    "مريم",
    "طه",
    "الأنبياء",
    "الحج",
    "المؤمنون",
    "النور",
    "الفرقان",
    "الشعراء",
    "النمل",
    "القصص",
    "العنكبوت",
    "الرّوم",
    "لقمان",
    "السجدة",
    "الأحزاب",
    "سبأ",
    "فاطر",
    "يس",
    "الصافات",
    "ص",
    "الزمر",
    "غافر",
    "فصلت",
    "الشورى",
    "الزخرف",
    "الدخان",
    "الجاثية",
    "الأحقاف",
    "محمد",
    "الفتح",
    "الحشر",
    "الممتحنة",
    "الصف",
    "الجمعة",
    "المنافقون",
    "التغابن",
    "الطلاق",
    "التحريم",
    "الملك",
    "القلم",
    "الحاقة",
    "المعارج",
    "نوح",
    "الجن",
    "المزمل",
    "المدثر",
    "القيامة",
    "الإنسان",
    "المرسلات",
  ];

  const randomIndex = Math.floor(Math.random() * suras.length);
  return suras[randomIndex];
}
