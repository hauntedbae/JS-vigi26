// console.log("11 paskaita.Objektai.")

// Tuščias objektas pvz po
// const emptyObject = {}

const user = {
    name: "hauntedbae",
    password: "rima8646", //paswordus užhešina, neglima taip vesti ištikro -> sha256 ->;
    mail: "rimasakalauskaite@icloud.com",
    age: 26,
    gender: "female",
};

console.log(user); 
// jei reikia pasiekti kurį nors būtent:
// console.log(user.name) ir pnš;
// console.log(use["name"]);

function getItem(key){
    // user["gender"];
    return user[key];
}

// console.log(getItem("gender")); pvz

const candle = {
    color: "green",
    taste: "apple",
    height: 8,
    radius: 8,
    turnLight: () => {
        console.log(`${candle.color} candle spreading tasteful ${candle.taste} smell`);
    },
    calculateLightTime: () => {
        const metric = candle.height * candle.radius;
        if(metric > 60){
            return 180;
        } else if(metric > 30){
            return 90;
        } else{
            return 45;
        }
    }
}

const minutes = candle.calculateLightTime();
console.log(minutes);

const cat = {
    name: "Kleopatras",
    age: 15,
    color: "black",
    weight: 7,
    eat: (food) => {
        console.log(`${cat.name} is eating ${food}`);
    },
    sleep: () => {
        console.log("Cat is sleeping ...");
    },
    description: () => {
        console.log(`${cat.name} is a ${cat.color} cat and ${cat.age} years`)
    }
}

// console.log(`${cat.name} is a ${cat.color} cat and ${cat.age} years`)
// cat.sleep();
// cat.eat("fish");

const codeClass = {
    type: "remote",
    subject: "Front-end + Node.js",
    lecturer: {
        name: "Rokas",
        surename: "Andreikėnas",
        age: 23,
        experience: 3,
    },
    students: ["Edvinas", "Liudmila", "Rima", "Karolis"],
}

// console.log(codeClass);
// console.log(codeClass.lecturer.name);

const lecturerFullName = `${codeClass.lecturer.name} ${codeClass.lecturer.surename}`;
// console.log(lecturerFullName);
// paimti vieta console.log(codeClass.studenst[0]) isvestis "Edvinas"
console.log(codeClass.students);
const studentsCount = codeClass.students.length;
// console.log(studentsCount);

console.log(codeClass.type);
// codeClass.type = "onsite"; pačiam objekte keisti reikšmę
// console.log(codeClass.type);

const student = {};

student.name = "Rokas";
student.surename  = "Andreikenas";

console.log(student);

const names = ["Edvinas", "Liudmila", "Rima", "Karolis"];

names[0] = "Rokas";
console.log(names);


const treeForm = document.getElementById("tree-form");

treeForm.addEventListener('submit', handleSubmitTreeForm);

function handleSubmitTreeForm(event){
    event.preventDefault();

    const treeName = document.querySelector("input[name='tree-name']");
    const treeAge = document.querySelector("input[name='tree-age']");

    const name = treeName.value;
    const age = Number(treeAge.value);
    // console.log(treeName.value);
    // console.log(treeAge.value);

    const tree = {
        name: name,
        age: age,
        // isOld: age > 100 ? true : false,
        isOld: age > 100,
    }
    console.log(tree);
}
