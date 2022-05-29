// konstruktoriaus funkcija rasoma is didziosios

// function Book(name, author, year) {
//     this.name = name;
//     this.author = author;
//     this.year = year;
//     this.getInfo = () => {
//         return `${this.name} parašė ${this.author}`
//     };
//     this.getYears = () => {
//         const today = new Date();
//         // console.log(today);
//         // console.log(today.getFullYear());
//         return today.getFullYear() - this.year;
//     }
// };

// const harryPotterBook = new Book("Harry Potter", "J.K. Rowling", 1997)
// const randomBook = new Book("Random Writer", "Random", 2010);

// // console.log(harryPotterBook);
// console.log(harryPotterBook.getInfo());
// console.log(harryPotterBook.getYears());
// console.log(randomBook.getYears());


// class Employee {
//     constructor(position, wage, experiece){
//         this.position = position;
//         this.wage = wage;
//         this.experiece = experiece;
//     }

//     getBonus = () => {
//         if(this.experiece < 5) {
//             return this.wage;
//         } else if (this.experiece < 10){
//             return this.wage * 2;
//         } else {
//             return this.wage * 3;
//         }
//     } 
// }

// const softwareDeveloper = new Employee("Front-end engineer", 4000, 2);
// const salesManager = new Employee("Sales manager", 6000, 7);


// console.log(softwareDeveloper.getBonus());
// console.log(salesManager.getBonus());

function Car(brand, model, engine, price){
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.basePrice = price;

    this.getPrice = function() {
        const additionalPrice = this.basePrice;
        if(this.engine === "electric") {
           return additionalPrice + 10000;
        } else if(this.engine === "diesel") {
            return additionalPrice + 5000;
        } else {
            return this.basePrice;
        }
    }

    this.turnOn = function () {
        return " Vroom";
    }
    
}

const carModel = new Car("BMW", "128ti", "petrol", 20000);
const carModel1 = new Car("Audi", "A8", "diesel", 10000);
const carModel2 = new Car("Nissan", "Leaf", "electric", 30000);

console.log(carModel.getPrice());
console.log(carModel1.getPrice());
console.log(carModel2.getPrice());