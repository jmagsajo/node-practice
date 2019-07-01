/* const listLocations = (locations) => {
    locations.forEach(element => {
        console.log(element);
    });
};

const myLocations = ['A', 'B']

listLocations(myLocations); */

/* console.log('Starting up');

setTimeout( () => {
    console.log('two seconds');
}, 2000);

setTimeout( () => {
    console.log('zero seconds');
}, 0);

console.log('Finishing up'); */

// reset secret key
// c5d45c1e6bc4664f05ad7c45e7ab9d7b
// sample url
// https://api.darksky.net/forecast/c5d45c1e6bc4664f05ad7c45e7ab9d7b/37.8267,-122.4233

const request = require('request');

const url = 'https://api.darksky.net/forecast/c5d45c1e6bc4664f05ad7c45e7ab9d7b/37.8267,-122.4233';

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    // console.log(response);
    console.log(data.currently);
});