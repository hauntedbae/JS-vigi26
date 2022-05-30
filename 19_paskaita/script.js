// OOP (Object-Orientated Programming) susideda iš keturių fundamentalių principų:
// Inkapsuliacija (objekto vidiniai duomenys yra slepiami ir jais galima manipuliuoti tik naudojant objekto viešus metodus);
// Abstrakcija (objekto nepriklausomumas nuo išorinių sudedamųjų dalių);
// Paveldėjimas (klasė yra kitos klasės konkretizacija);
// Polimorfizmas (galimybė dirbti su objektu nežinant jo tikslaus tipo bei struktūros).

// class Animal {
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//     }
// }
  
// class Rabbit extends Animal {
//   constructor(name,color) {
//     super(name, color);
//     // this.name = name; pašalinus this, pasiimam Animal contructor (paveldejimas)
//     this.family = "rabbits";
//     this.created = Date.now();
//   }
// }
  
// let rabbit = new Rabbit("White Rabbit", "white"); // Error: this is not defined
// let rabbit = new Animal("White Rabbit", "white"); 
// console.log(rabbit);

class Item {
    constructor(name, price, count){
        this.name = name;
        this.price = price;
        this.count = count;
    }

    addToList = () => {
        const list = document.getElementById("list");
        const newItem = document.createElement("li");
        newItem.textContent = `${this.name} x ${this.count} = $ ${this.count * this.price}`;
        list.append(newItem);
    }
}

const submitItemForm = (event) => {
    event.preventDefault();
    const itemName = document.querySelector("input[name='item']");
    const price = document.querySelector("input[name='price']");
    const count = document.querySelector("input[name='count']");

    const item = new Item(itemName.value, Number(price.value), Number(count.value))
    // console.log(item);
    item.addToList();
};

const itemForm = document.getElementById("form-item");
itemForm.addEventListener("submit", submitItemForm);

