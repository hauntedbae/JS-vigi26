const person = {
    name: "Rima",
    surname: "Sakalauskaite",
    age: 26,
};

// const ageProperty = "age";

// console.log(person.age);
// console.log(person.name);
// console.log(person["age"]);

// person["age"];
// person[ageProperty];

const people = [ 
    { id: 2, name: "Jonas", surname: "Jonaitis", age: 55, },
    { id: 1, name: "Rima", surname: "Sakalauskaite", age: 26 },
    { id: 3, name: "Petras", surname: "Sakalas", age: 5, },
];

// const firstItem = people[0]; // pirmas elementas is masyco
// console.log(firstItem.name);
// const lastItem = people[people.lengt - 1]; // paskutinis elementas is masyvo
// console.log(lastItem);

people.push({id: 4, name: "Gokas", surname: "Sangokas", age: 99 });
people.shift();
// console.log(people);

// people.forEach( (person) => {
//     // console.log(person.surname);
//     const fullName = `${person.name} ${person.surname}`;
//     console.log(fullName);
// } );

// const peopleWihhFullName = people.map( (person) => {
//     const fullName = `${person.name} ${person.surname}`;
    
//     return {
//         ...person, 
//         fullName: fullName, 
//         canDrive: person.age >= 18 ? true : false,
//     };
// });

// console.log(peopleWihhFullName);

// const peopleWihhFullName = people.map( (person) => {
//     const fullName = `${person.name} ${person.surname}`;
    
//     return {
//         ...person, 
//         name: person.name.toUpperCase(),
//         surname: capitalize(person.surname),
//         fullName: fullName, 
//         canDrive: person.age >= 18 ? true : false,
//     };
// });

// function capitalize(value) {
//     return value.charAt(0).toUpperCase() + value.slice(1).toLoverCase();
// }
// console.log(peopleWihhFullName);

const veggies = [
    {name: "Apple", category: "Tree", price: 1 },
    {name: "Pear", category: "Tree", price: 2 },
    {name: "Blackberries", category: "Bush", price: 5 },
    {name: "Bluberries", category: "Bush", price: 7 },
    {name: "Carrot", category: "Dirt", price: 0.25 },
    {name: "Potato", category: "Dirt", price: 0.30 }
];

// // const cheapVeggies = veggies.filter((veggie) => veggie.price <= 1 );
// // const expensiveVeggies = veggies.filter((veggie) => veggie.price >= 6);

// // const expensiveVeggiesNames = veggies.map((veggie) => veggie.name);

// const expensiveVeggiesNames = veggies.filter(
//     (veggie) => veggies.priece >= 6
// );

// console.log(cheapVeggies);
// console.log(expensiveVeggies);
// console.log(expensiveVeggiesNames);

// veggies.sort((a, b) => (a.name > b.name ? 1 : -1)); // nuo a iki z

// console.log(veggies);


function prices(array) {
    // {name: "", price: 0}
    const sorted = array.sort((a, b) => a.price - b.price);
    const cheapest = sorted[0];
    const expensive = sorted[sorted.length - 1];
    return { cheapest: cheapest.name, expensive: expensive.name };
    
}
    
const veggiesPrice = prices(veggies);
    
console.log(veggiesPrice.cheapest);
console.log(veggiesPrice.expensive);