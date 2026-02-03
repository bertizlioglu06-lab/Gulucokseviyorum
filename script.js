const surpriseLines = [
  "Sana baktığımda, iyi ki demek çok kolay oluyor.",
  "Seninle her şey daha güzel. Her şey.",
  "Kalbimdeki en güvenli yer sensin.",
  "Gülüşün, günün en güzel kısmı.",
  "Benim en sevdiğim “ev” sensin."
];

const dailyLines = [
  "Bugün kendine nazik ol. Çünkü sen her şeyin en güzelini hak ediyorsun.",
  "Seni sevmek bir şans değil; bir mucize gibi.",
  "Senin varlığın bile içimi rahatlatıyor.",
  "Yanında olmak, hayatın “doğru” hali gibi.",
  "Gözlerinle konuştuğunda, dünya sessizleşiyor."
];

function pick(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

const btnSurprise = document.getElementById("btnSurprise");
const surprise = document.getElementById("surprise");
btnSurprise.addEventListener("click", () => {
  surprise.textContent = "✨ " + pick(surpriseLines);
});

const dailyLine = document.getElementById("dailyLine");
const btnNewLine = document.getElementById("btnNewLine");

function setDaily(){
  dailyLine.textContent = pick(dailyLines);
}
setDaily();
btnNewLine.addEventListener("click", setDaily);
