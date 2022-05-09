// console.log("7 paskaia. Formos.")

const exampleForm = document.getElementById("example-form"); // example formosostraukimas
// console.log(exampleForm); //jei nesi isitikines, consolink

exampleForm.addEventListener("submit", handlSubmitExampleForm);

function handlSubmitExampleForm(event) {
    event.preventDefault(); //sustabdo refresinimasi

    const nameInput = document.querySelector("input[name=name]")
    const surenameInput = document.querySelector("input[name=surename]");
    const result = document.getElementById("example-result");
    
    const fullName = `${nameInput.value} ${surenameInput.value}`;
    result.textContent = `Sveikinam ${fullName}, jūs priimtas/priimta!`;

    nameInput.value = "";
    surenameInput.value = "";
    // console.log(nameInput.value);
    // console.log(surenameInput.value);
    // console.log("Example form submitted");
}

const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", handlSubmitRegisterForm);

function handlSubmitRegisterForm(event) {
    event.preventDefault();

    const username = document.querySelector("input[name=username");
    const password = document.querySelector("input[name=password");
    const email = document.querySelector("input[name=email]");
    const result = document.querySelector("#register-result");

    result.textContent = `${username.value}, ${email.value} registered.`;

    username.value = "";
    password.value = "";
    email.value = "";

}

const additionalForm = document.getElementById("additional-form");

additionalForm.addEventListener("submit", handleSubmitAdditionalForm);

function handleSubmitAdditionalForm(event) {
  event.preventDefault();

  const gender = document.querySelector('input[name="gender"]:checked');
  console.log(gender.value);

  const fruits = document.querySelectorAll("input[name='fruit']:checked");
  for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    console.log(fruit.value);
  }
}