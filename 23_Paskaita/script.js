// GET - gauna esamus įrašus
// POST - sukuria naują įrašą
// PUT - kuris modifikuoja esantį įrašą
// DELETE - ištrina esama įrašą

// const url = "https://jsonplaceholder.typicode.com/comments";

// fetch(url).then(resp => resp.json()).then(response => {
//     console.log(response);
// }).catch(error => {
//     console.error(error, ": Failed to load comments");
// });

const renderComment = (comment) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = `[${comment.email}], [${comment.name}], [${comment.body}]`;
    document.body.prepend(paragraph);
}

fetch ("https://jsonplaceholder.typicode.com/comments")
.then(resp => resp.json())
.then(response => {
    const firstItem = response[0];
    // console.log(firstItem);
    renderComment(firstItem);

    console.log("comments: ",response);
}).catch(error => {
    console.error(error, ": Failed to load comments");
});

const renderUser = (user) => {
    console.log(user);
    const addressCity = user.address.city;
    const companyName = user.company.name;
    const email = user.email;

    const tdAddressCity = document.createElement('td');
    const tdCompanyName = document.createElement('td');
    const tdEmail = document.createElement('td');

    tdAddressCity.textContent = addressCity;
    tdCompanyName.textContent = companyName;
    tdEmail.textContent = email;

    const trUser = document.createElement('tr');
    trUser.append(tdAddressCity, tdCompanyName, tdEmail);

    document.getElementById('users').append(trUser);
};


fetch ("https://jsonplaceholder.typicode.com/users")
.then(resp => resp.json())
.then(response => {
    // const firstItem = response[0]

    // renderUser(response[0]);
    // renderUser(response[1]);
    // renderUser(response[2]);
    // renderUser(response[3]);

    response.forEach(user => renderUser(user));

    // console.log("users: ",response);
}).catch(error => {
    console.error(error, ": Failed to load users");
});

const renderUserCard = (user) => {
    const photo = document.createElement('img');
    const userName = document.createElement('h3');
    const email = document.createElement('p');
    const street = document.createElement('p');

    photo.src = 'https://th.bing.com/th/id/OIP.N6YjbG_qY-RGz3nazYh9AQHaGe?w=204&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7';
    photo.alt = `${user.name} photo`;
    userName.textContent = user.username;
    email.textContent = user.email;
    street.textContent = user.address.street;

    const card = document.createElement('div');
    card.className = 'card';
    card.append(photo, userName, email, street);

    document.querySelector('.cards').append(card);
}

fetch ("https://jsonplaceholder.typicode.com/users/1")
.then(resp => resp.json())
.then(response => {
    renderUserCard(response);



    // console.log("users: ",response);
}).catch(error => {
    // console.error(error, ": Failed to load user");
});

fetch ("https://randomuser.me/api/").then(resp => resp.json()).then(response => {

}).catch(error => {
    console.log(error, ": Failed to load user");
});


///
const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch(error) {
      console.error(error);
    }
};
  
fetchRandomUser();

// async function random() {}

// const getRandomUser = async () => {
//     try {
//         const resp = await fetch('https://randomuser.me/api/');
//         const response = await resp.json();
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// };

// fetch('https://randomuser.me/api/') 
//     .then((resp) => resp.json())
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     })