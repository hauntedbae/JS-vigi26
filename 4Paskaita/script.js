// console.log("Ketvirta paskaita, for ciklai");

// i++ - prideda +1 (increment)
// i = i + 1; (decrement)

// i-- - atima 1
// i = 1 - 1

// Operatoiai
// +=   x += y   x = x + y
// -=   x -= y   x = x - y

// kintamieji turi būti i, j, k
// sukuriamas kintamasis
// [inicializavimas];[sąlyga];[galutinė išraiška] 
// for (let i = 0; i < 10; i++) {
//     console.log('John');
// }


//   const name = 'John';
//   const count = 10;
//   for (let i = 0; i < count; i++) {
//     console.log(name);
//   }

//   const name = 'John';
//   const count = 10;
//   for (let i = 0; i < count; i++) {
//     console.log(`${i}. ${name}`);
//   }


// abu tinka 4 ats.
//  i = 10; 10 > 0; 10  true
// i = 9; 9 > 0; 9
// ...
// i = 0; 0 > 0; 0  false
//   let i = 10;
// while(i > 0) {
//   console.log(i);
//   i--;
// }

// for (let i = 10; i > 0; i-- ) {
//     console.log(i);
// }


// i = 0; 0 < 10; i = 0 + 2
// i = 2; 2 < 10; i = 2 + 2
// i = 4; 4 < 10; i = 4 + 2
// for (let i = 0; i < 10; i+= 2){
//     console.log(i);
// }

// console.log(" ");
// for (let i = 0; i < 10; i+= 3){
//     console.log(i);
// }

// const dogName = "Rikis";
// const repeat = 5;
// let result = "";

// for (let i = 0; i < repeat; i++) {
//     if (i === repeat -1) {
//         // paskutinis ciklas
//         result += `${dogName}. `;
//     } else {
//     result += `${dogName}, `;
//     }
// }

// i = 0; i < 5; 0 = 0 + 1
// "" = "" + "Rikis"
// "Rikis" = "Rikis" + "Rikis"
// "RikisRikis" = "RikisRikis" + "Rikis"
// ...

// console.log(result);

// const start = 1;
// const count = 9;
// let result = 0;

// for (let i = start; i < count + 1; i++) {
//     console.log(i);
//     result += i;
// }

// console.log(result);

// // incializavima
// let i =0;
// // salyga
// while (i < 3) {
//     // shows 0, then 1, then 2
//     console.log(i);
//     // israiska
//     i++;
// }

// do...while ciklas pirmiausia įvykdys kūną, 
// tada patikrins būklę ir, kol tai tiesa, 
// vėl ir vėl ją vykdys.

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 3);

// 1 pratimas
// for (let i = 2; i < 12; i+= 2){
//      console.log(i);
// }

// 2 pratimas

// const name = "Hello";
// const x = 9;
// for (let i = 0; i < x; i++) {
//     console.log(name);
// }

// 3pratimas

const getLaugh = "ha";
const repeat = 4;
let result = "";

for (let i = 0; i < repeat; i++) {
    if (i === repeat -1) {
         result += `${getLaugh}. `;
    } else {
        result += `${getLaugh}, `;
    }
}

console.log(result);
