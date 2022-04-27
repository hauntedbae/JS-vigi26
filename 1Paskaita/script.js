// One line comment 

/*
    Sveikia cia yra
    Multi line comment
*/

//  Sukuriam kintamuosius (inicializuojam kintamaji) su let
let myName;
let mySurname;
let age;
let fullName;
let result;
let average;
let percent;

// console.log(myName); // undefined - yra vienas is tipu naudojamas, kai kintamasis yra suskurta, bet neturi priskirtos reiksmes

//  Priskiriam kintamiejam reiksmes
myName = "Rima"; // string - reikšmė apsirašanti tarp kabučių '' arba ""
mySurname = "Sakalauskaite" // string
age = 26; // number - reikmė apsirašanti iš skaičių. Sveikas skaičius pvz. 10 arba su kableliu 3.14
fullName = myName + " " + mySurname; // sudėtis - tarp dviejų tokių pačių tipų (pvz. sring + string = stringstring)
result = age + age + age + age - 9; // 26 + 26 + 26 + 26 - 9 = 95
result = result + result; // 95 + 95 = 190
average = (8 + 8 + 9 + 10 + 10) / 5; // (45/5=9)
// is viso surinka 60e, as atnesiau 20e (procentaliai apskaiciuota)
percent = 100 * 20 / 60; //33.33
percentOutput = percent + "%"; // 33.33%  number + string = string

// console.log(myName);

// console.log(9 + 9); // 18
// console.log("9" + "9"); // "99"
// console.log(40 + "760"); // "40760"

// sukuriam kintamuosius su const

const myDogName = "Hadas";
const myDogAge = 3;
const doubleDogName = myDogName + myDogName;
const greetings = "Sveikas" + " " + myDogName + "!";

let question = "How are you?";


// console.log(greetings);

// 1.Kada naudoti let ir kada const? let tik kai reikšmė yra kintanti. Kitais atvejais naudoti const
// 2.Sukūrus kintamąjį - visada turim prisirti pradię reikšmę
// 3.Visada naudojam === triguba lygybe (tikrina reiksme ir tipa)
// 4.visos neigiamos reiksmes yra - undefined , null, 0, "", false

// string, number, boolean (bool)

const yes = true; // teigiama reiksme
const no = false; // meigiama reiksme
let isAdult = true;

//console.log("Rima" == "rima"); // "Rima" yra lygus "rima" = false
//console.log(10 == 10);  // 10 yra lygu 10 = true
//console.log(10 != 10); //10 yra ne lygu 10 = false
//console.log(5 != 4); // 5 yra nelygu 4 = true

// Dviguba lygybe tikrina ar reiksme yra lygi
// console.log("5" == 5); 
// // Triguba lygybe tikrina ar riksme yra lygi ir tipas toks pats 
// // (visa laika naudoti triguba lygybe)
// console.log("5" === 5);

console.log("4" != 4);
console.log("4" !== 4);
