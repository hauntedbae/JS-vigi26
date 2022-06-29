// console.log("Dom JS");

// document.getElementById("pirmas"); // p
// document.getElementsByClassName("item"); // [p, p]
// const items = document.getElementsByClassName("item");
// // items[0];
// // items[items.lenth - 1];
// document.getElementsByName("mano-input");
// document.getElementsByTagName("p");

// document.querySelector("div"); // vienaskaita grazina pagal elementa {}
// document.querySelector(".card"); // vienaskaita grazina pagal klase {}
// document.querySelector("#price"); // vienaskaita grazina pagal id {}
// document.querySelector(".card div"); // vienaskaita
// document.querySelectorAll(); // daugiskaita []

// const allParagraphs = document.querySelectorAll("p");

// const first = allParagraphs[0];
// const last = allParagraphs[allParagraphs.length - 1];

// first.style.background = "red";

// const help = document.getElementById("help");

// help.textContent = "Rima";
// help.style.background = "green";

// const empty = document.getElementById("empty");

// empty.textContent = "Rima";
// empty.style.color = "green";

// const body = document.querySelector("body");
// body.style.background = "#4267B2";

// const textElement = document.getElementById("text");
// textElement.textContent = "Labadiena, geros dienos";
// textElement.style.textAlign = "center";
// // textElement.style.display = "flex";
// // textElement.style.justifyContent = "center";
// // textElement.style.alignItems = "center";
// // textElement.style.height = "80vh";

// const div = document.createElement("div");
// div.textContent = "Mano naujas divas";
// document.body.append(div); // istumia i gala, kaip vaikini elementa
// document.body.prepend(div); // istumia i preiki, kaip vaikini elementa

// const container = document.createElement("div");
// const p = document.createElement("p");
// p.textContent = "hello";

// container.append(p);

// document.querySelector("#id").append(container);

// const square = document.createElement("div");

// square.style.background = "black";
// square.style.width = "100px";
// square.style.height = "100px";

// document.body.append(square);

// const square1 = document.createElement("p");
// const square2 = document.createElement("p");
// const square3 = document.createElement("p");

// square1.style.background = "yellow";
// square1.style.width = "50px";
// square1.style.height = "50px";

// square2.style.background = "green";
// square2.style.width = "100px";
// square2.style.height = "100px";

// square3.style.background = "red";
// square3.style.width = "150px";
// square3.style.height = "150px";

// document.body.append(square1, square2, square3);

// const fruits = ["banana", "apple", "pear"];

// const addUl = document.createElement("ul");

// for (let i = 0; i < fruits.length; i++) {
//   const addFruits = fruits[i];

//   const addLi = document.createElement("li");

//   addLi.textContent = addFruits;

//   addUl.append(addLi);
// }

// document.body.append(addUl);

// function handleClick(event) {
//   count++;

//   const countEl = document.getElementById("count");

//   countEl.textContent = count;

//   console.log(`Button pressed: ${count} times`);

//   const resultEl = document.getElementById("result");

//   if (count === 5) {
//     resultEl.textContent = "You just hit button five times";
//   } else {
//     resultEl.textContent = "";
//   }
// }

// // myButton.addEventListener("click", handleClick);

// const myButton = document.getElementById("my-button");

// let count = 0;

// myButton.addEventListener("click", (event) => {
//   count++;

//   const countEl = document.getElementById("count");

//   countEl.textContent = count;

//   console.log(`Button pressed: ${count} times`);

//   const resultEl = document.getElementById("result");

//   if (count === 5) {
//     resultEl.textContent = "You just hit button five times";
//   } else {
//     resultEl.textContent = "";
//   }
// });

// const button = document.getElementById("result");
// // jei nenaudojam event, galima palikt tuscia
// button.addEventListener("click", () => {
//   const resultEl = document.getElementById("element");
//   resultEl.textContent = "Rima";
//   resultEl.style.color = "blue";
// });

// const solution = document.getElementById("plus");
// const minus = document.getElementById("minus");
// let count = 0;

// plus.addEventListener("click", () => {
//   count++;

//   const result = document.getElementById("result");
//   result.textContent = count;
// });

// minus.addEventListener("click", () => {
//   count--;

//   const result = document.getElementById("result");
//   result.textContent = count;
// });

// let number500Count = 0;

// const plus500button = document.getElementById("plus500");
// plus500button.addEventListener("click", () => {
//   number500Count += 500;
//   document.getElementById("result500-number").textContent = number500Count;
// });

// const minus500button = document.getElementById("minus500");
// minus500button.addEventListener("click", () => {
//   number500Count -= 500;
//   document.getElementById("result500-number").textContent = number500Count;
// });

// const resetButton = document.getElementById("reset");
// resetButton.addEventListener("click", () => {
//   number500Count = 0;
//   document.getElementById("result500-number").textContent = number500Count;
// });

// Budas su funkcija
// const plus500button = document.getElementById("plus500");

// plus500button.addEventListener("click", () => renderResultNumber("+"));

// const minus500button = document.getElementById("minus500");

// minus500button.addEventListener("click", () => renderResultNumber("-"));

// const resetButton = document.getElementById("reset500");

// resetButton.addEventListener("click", () => renderResultNumber());

// function renderResultNumber(action) {
//   if (action === "+") {
//     number500Count += 500;
//   } else if (action === "-") {
//     number500Count -= 500;
//   } else {
//     number500Count = 0;
//   }

//   document.getElementById("result500-number").textContent = number500Count;
// }

// const registerForm = document.getElementById("register");

// registerForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const username = document.querySelector("input[name='username']");
//   const email = document.querySelector("input[name='email']");
//   const age = document.querySelector("input[name='age']");
//   const password = document.querySelector("input[name='password']");

//   const result = document.createElement("h2");
//   result.textContent = `${username.value}, ${email.value}, ${age.value}, ${password.value}`;
//   document.body.append(result);
// });

const registrationForm = document.getElementById("register");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.querySelector("input[name='username']");
  const surname = document.querySelector("input[name='surname']");
  const age = document.querySelector("input[name='age']");

  const resultAge = document.createElement("h2");

  if (age.value < 18) {
    resultAge.textContent = `${username.value} ${surname.value} is child`;
  } else {
    resultAge.textContent = `${username.value} ${surname.value} is adult`;
  }

  document.body.append(resultAge);
});
