// const testString = "Rokas !@#$%^ Tomas 123";

// // ats: "Rokas !!@@##$$%%^^ Tomas 112233"

// const isLetter = (char) => char.toLowerCase() !== char.toUpperCase();

// const newTest = testString.split("").map((char) => (isLetter(char) || char === " " ? char : char + char)).join("");

// console.log(newTest);

const cookie = {
    timeSpent: "2h",
    loggedIn: "2022/06/01T18:00:00",
    theme: "dark",
};

//                 raktas /  reiksme
document.cookie = 'timeSpent=2h';
document.cookie = "loggedIn=2022/06/01T18:00:00";
document.cookie = 'theme=dark';

// localStorage.setItem("name", "Rima");
// localStorage.setItem("surname", "Sakalauskaite");

const result = document.getElementById("full-name");
const fullName = localStorage.setItem()

const button = document.getElementById("save");

button.addEventListener("click", () => {
    const name = document.querySelector("input[name='name']");
    const surname = document.querySelector("input[name='surname']");

    const fullName = `${name.value} ${surname.value}`;
    const result = document.getElementById("full-name");
    result.textContent = fullName;

    localStorage.setItem("fulName", fullName);
})