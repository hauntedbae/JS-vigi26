// const promise = new Promise((resolve, reject) => {
//     resolve("17 celsius, Vilnius");
// });

// promise.then(response => {
//     console.log(`Dabar yra ${response}`);
// });

// const resolvedPromise = new Promise((resolve, reject) => {
//     resolve("17 celsius, Vilnius");
// });

// resolvedPromise.then(response => {
//     console.log(`Dabar yra ${response}`);
// });

// const rejectedPromise = new Promise((resolve, reject) => {
//     reject("Tinklas yra perkrautas. Pabandykite veliau.")
// });

// rejectedPromise.then((response) => {
//     console.log(`Dabar yra ${response}`);
// }).catch(error => {
//     console.error(error);
// });

// const rejectedPromise = new Promise((resolve, reject) => {
//     resolve("Tinklas yra perkrautas. Pabandykite veliau.")
// });

// rejectedPromise.then((response) => {
//     console.log(`Dabar yra ${response}`);
// }).catch(error => {
//     console.error(error);
// }).finally(() => {
//     console.log("Kreipimasis i oro taryba")
// });

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("17 celsijaus")}, 4000);
    // setTimeout(() => {
    //     reject("Tinklas yra perkrautas. Pabandykite veliau.")}, 4000);
});

const renderWeather = (response) => {
    const weather = document.getElementById("weather");
    weather.textContent = `Dabar yra ${response}`
};

const showError = (err) => {
    const error = document.getElementById("error");
    error.textContent = err;
    error.style.color = "red";
};

const showPriceMessage = () => {
    const header = document.getElementById("header");
    header.textContent = "Jus pasinaudojote oru paslauga. Jums tai kainavo 5 ct."
};

const getWeather = async () => {
    const response = await promise
    renderWeather(response);

    try {
        renderWeather(response);
    } catch (error) {
        showError(error);
    } finally {
        showPriceMessage();
    }
};

getWeather();

async function getWeatherFunc() {

}

// promise.then((response) => {
//     renderWeather(response);
// }).catch(error => {
//     showError(error);
// }).finally(() => {
//     showPriceMessage();
// });