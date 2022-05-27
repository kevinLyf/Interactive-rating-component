const circle1 = document.getElementById("rNumber1");
const circle2 = document.getElementById("rNumber2");
const circle3 = document.getElementById("rNumber3");
const circle4 = document.getElementById("rNumber4");
const circle5 = document.getElementById("rNumber5");
const submiteBtn = document.getElementById("submiteBtn");
let AlreadyClicked = false;
let chosenNumber;

circle1.addEventListener("click", () => {
  chosenNumber = 1;
  circle1.style.color = "#f7fbfe";
  circle1.style.backgroundColor = "#fc7613";
  circle2.style.color = "#fff";
  circle2.style.backgroundColor = "#262f38";
  circle3.style.backgroundColor = "#262f38";
  circle3.style.color = "#fff";
  circle4.style.backgroundColor = "#262f38";
  circle4.style.color = "#fff";
  circle5.style.color = "#fff";
  circle5.style.backgroundColor = "#262f38";
});
circle2.addEventListener("click", () => {
  chosenNumber = 2;
  circle1.style.color = "#f7fbfe";
  circle1.style.backgroundColor = "#fc7613";
  circle2.style.color = "#f7fbfe";
  circle2.style.backgroundColor = "#fc7613";
  circle3.style.backgroundColor = "#262f38";
  circle3.style.color = "#fff";
  circle4.style.backgroundColor = "#262f38";
  circle4.style.color = "#fff";
  circle5.style.color = "#fff";
  circle5.style.backgroundColor = "#262f38";
});
circle3.addEventListener("click", () => {
  chosenNumber = 3;
  circle1.style.color = "#f7fbfe";
  circle1.style.backgroundColor = "#fc7613";
  circle2.style.color = "#f7fbfe";
  circle2.style.backgroundColor = "#fc7613";
  circle3.style.color = "#f7fbfe";
  circle3.style.backgroundColor = "#fc7613";
  circle4.style.backgroundColor = "#262f38";
  circle4.style.color = "#fff";
  circle5.style.color = "#fff";
  circle5.style.backgroundColor = "#262f38";
});
circle4.addEventListener("click", () => {
  chosenNumber = 4;
  circle1.style.color = "#f7fbfe";
  circle1.style.backgroundColor = "#fc7613";
  circle2.style.color = "#f7fbfe";
  circle2.style.backgroundColor = "#fc7613";
  circle3.style.color = "#f7fbfe";
  circle3.style.backgroundColor = "#fc7613";
  circle4.style.backgroundColor = "#fc7613";
  circle4.style.color = "#f7fbfe";
  circle5.style.color = "#fff";
  circle5.style.backgroundColor = "#262f38";
});
circle5.addEventListener("click", () => {
  chosenNumber = 5;
  circle2.style.color = "#f7fbfe";
  circle2.style.backgroundColor = "#fc7613";
  circle1.style.color = "#f7fbfe";
  circle1.style.backgroundColor = "#fc7613";
  circle3.style.color = "#f7fbfe";
  circle3.style.backgroundColor = "#fc7613";
  circle4.style.color = "#f7fbfe";
  circle4.style.backgroundColor = "#fc7613";
  circle5.style.color = "#f7fbfe";
  circle5.style.backgroundColor = "#fc7613";
});

function thanksPage() {
  if (chosenNumber !== undefined) {
    location.href = "./pages/thanks.html";
    localStorage.setItem("rating", chosenNumber);
  }
}
