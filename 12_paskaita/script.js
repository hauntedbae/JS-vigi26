// // Pasikartoti masyvo struktūra - laužtiniai skliaustai, []
// // Išmokti suskurti elementa JS faile
// // Susispažinti teoriškai su appeend/prepend metodais ir juos panaudoti

// const array = ["Rokas", "Tomas", "Karolis"];
// const numbers = [1, 2, 3, 4];
// const users = [
//     {name: "Rokas", age: 12 },
//     {name: "Tomas", age: 14},
// ];

// const lists = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// // const divs = [ <div>Rokas</div>, <div>Tomas</div>];, kaip atrodo masyvas elementų

// const fruits = document.getElementsByTagName("li");
// const fruits2 = document.querySelectorAll("#fruit");

// // console.log(fruits2);
// // console.log(numbers);
// // console.log(fruits);

// // Naujo HTML elemento sukurimas
// const pineapple = document.createElement("li");
// // po sukurimo gavosi tiesiog list item <li></li>
// pineapple.textContetnt = "Pineapple";
// // rezultatas <li>Pineapple</li>

// const pear = document.createElement("li");
// pear.textContent = "Pear";
// pear.style.color = "green";

// const fruitList = document.getElementById("fruits");

// //fruitList.prepend(pear); // prideda i prieki
// //fruitList.append(pineapple); // prideda i gala

// const extraList = document.createElement("ol");
// // <ol></ol>
// extraList.append(pineapple);
// extraList.append(pear);
// extraList.append(pineapple, pear); sutrumpintas

// document.body.append(extraList);


// automobilio aprasymas

const card = document.createElement("div");
card.style.background = "#f3f3f3";
card.style.display = "flex";

const image = document.createElement("img");
image.src = "https://s1.15min.lt/images/photos/2020/08/19/original/ferrari-f8-tributo-5f3d402aef4f7.jpg";
image.alt = "Red ferrari";
image.style.width = "40%";
// image.style.maxHeight = "400px";

const info = document.createElement("div");
info.style.paddingLeft = "24px";

const title = document.createElement("h1");
title.textContent = "Ferrari";

const description = document.createElement("p");
description.textContent = "Very nice car"

const benefits = document.createElement("ul");
const firstBenefit = document.createElement("li");
firstBenefit.textContent = "Color";
const secondBenefit = document.createElement("li");
secondBenefit.textContent = "Good price";
const thirdBenefit = document.createElement("li");
thirdBenefit.textContent = "Speed";

// const benefitList = ["Color", "Price", "Speed", "Emotion"];
// for(let i = 0; i < benefitList.length; i++){
//     const benefitDescription = benefit[i];
//     const benefit = document.createElement("li");
//     benefit.textContent = benefitDescription;
//     benefit.append(benefit);
// }

benefits.append(firstBenefit, secondBenefit, thirdBenefit);
info.append(title, description, benefits);
card.append(image, info);
document.body.append(card);
