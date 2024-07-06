const title = document.querySelector(".title");
const btn = document.querySelector(".btn");

let DATA = [
  "+99890 123 45 67",
  "+99890 234 56 78",
  "+99890 345 67 89",
  "+99890 456 78 90",
  "+99890 567 89 01",
  "+99890 678 90 12",
  "+99890 789 01 23",
  "+99890 890 12 34",
  "+99890 901 23 45",
  "+99890 012 34 56",
  "+99890 123 45 68",
  "+99890 234 56 79",
  "+99890 345 67 80",
  "+99890 456 78 91",
  "+99890 567 89 02",
];

function addNumber() {
  const number = prompt("O'yinda ishtirok etish uchun raqam kiriting");
  DATA.push(number.trim());
}

btn.addEventListener("click", () => {
  btn.setAttribute("disabled", true);

  title.textContent = "Omad ShouGa Xush Kelibsiz!";

  let interval = setInterval(() => {
    const index = Math.floor(Math.random() * DATA.length);
    title.textContent = `${DATA[index]}`;
  }, 500);

  setTimeout(() => {
    clearInterval(interval);
    btn.removeAttribute("disabled");
  }, 5000);
});

addNumber();
