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

const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'https://api.darksky.net/forecast/c5d45c1e6bc4664f05ad7c45e7ab9d7b/37.8267,-122.4233';

/* request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(response);
    console.log(data.currently);
}); */

// https://www.mapbox.com/

// const mapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGhlc29qMDMiLCJhIjoiY2p4azQ2cGpoMDRkMzNvb2dmZHljcjBxYyJ9.T3soGoqw5YYnSn94ubWxIw'
// const darkSkyUrl = 'https://api.darksky.net/forecast/c5d45c1e6bc4664f05ad7c45e7ab9d7b/';

/* request({ url: url+'?lang=es', json: true }, (error, response) => {
    const data = response.body.currently;
    console.log(response.body.daily.data[0].summary + ' It is currently ' + data.temperature + ' degress out. There is a ' + data.precipProbability + '% chance of rain');
}); */


/* request({url : mapUrl+'&limit=1', json : true}, (error, response) => {
    if(error){
        console.log("Unable to connect to location services!");
    }else if(response.body.message == 'Not Authorized - Invalid Token'){
        console.log('Not Authorized - Invalid Token');
    }else if(response.body.features.length === 0){
        console.log('Unable to find location!');
    }else{
        const center = response.body.features[0].center;
        const lat = center[0];
        const long = center[1];
        console.log('lat: ' + lat + ' long: ' + long);
    }
}); */

/* request({ url: url+'?lang=es', json: true }, (error, response) => {
    if(error){
        console.log("Unable to connect to weather service!");
    }else if(response.body.code){
        console.log("Unable to find location!");
    }else{
        const data = response.body.currently;
        console.log(response.body.daily.data[0].summary + ' It is currently ' + data.temperature + ' degress out. There is a ' + data.precipProbability + '% chance of rain');
    }
    
});  */

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

/* forecast(121, 14.58333, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

geocode('Manila', (error, data) => {
    console.log('Error', error)
    console.log('Data', data);
}) */

// callback chaining
/* geocode('Manila', (error, data) => {
    if(error){
        return console.log(error)
    }
    
    forecast(data.latitude, data.longtitude, (error, forecastData) => {
        if(error){
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)

    })
}) */

if(process.argv[2]){
    geocode(process.argv[2], (error, {latitude, longtitude, location}) => {
        
        if(error){
            return console.log(error)
        }
        
        forecast(latitude, longtitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
    
        })
    }) 
}else{
    console.log('Please enter an Address!');
}