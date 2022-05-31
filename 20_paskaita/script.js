// 1 pvz

// class Cat {
//     constructor(name, weight){
//         this.name = name;
//         this.weight = weight;
//     }

//     isFat() {
//         if(this.weight >= 5) {
//             return `${this.name} yra storas kačiukas`
//         } else {
//             return `${this.name} yra plonas kačiukas`
//         }
//     }
// }

// const cat = new Cat("Kleopatras", 7);
// console.log(cat.isFat());

// 2 pvz

// const randomArray = [1, 5, "a", "g", "z", 6];

const removeLettersFromArray = (array) => array.filter(x => !isNaN(x));
const removeNumbersFromArray = (array) => array.filter(x => isNaN(x)); // kad nuimti raides, o ne skaicius, reikia padeti sauktuka ( pvz: (array) => array.filter(x => !isNaN(x)))

// const removedNumbers = removeNumbersFromArray(randomArray);
// console.log(removedNumbers);

// // 3 pvz

// let test = "Petras 123 Slekys";

// const newTest = test.split("").map((char) => isNaN(char) ? char+ char : char).join("");
// console.log(newTest);

// Mum padaryt šitą
// const testString = "Rokas !@#$%^ Tomas 123";
// ats: "Rokas !!@@##$$%%^^ Tomas 112233"

// 4 pvz

// patikrinti ar susideda is 5 skaiciu
// patikrinti ar susideda is 3 skaiciu ir 2 raidziu
// patikrinti ar turi tarpa
// turi susideti is 5 skaiciu

const checkPostCode = (postCode) => {

    const letters = removeLettersFromArray(postCode.split(""));
    const numbers = removeNumbersFromArray(postCode.split(""));
    
    if(postCode.includes(" ")) {
        return false;
    } else if (letters.length === 5) {
        return true;
    } else if (letters.length === 2 && numbers.length === 3) {
        return true;
    } else {
        return false;
    }
};
    
const code = "123ab"; // true
    
console.log(checkPostCode(code));