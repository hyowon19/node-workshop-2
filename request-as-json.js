// How’s the weather?
// Go to Dark Sky API and read the documentation
// Get yourself a free API key
// Remember the Google Geocoding API from yesterday’s workshop
// Using both APIs, complete the following workflow:
// Ask the user for their location
// Retrieve the weather for the user’s location
// Display the current weather as well as the next 5 days weather in a nice way
// Hint: to display the results in a nice way, a few NPM modules could be useful, including but not limited to:
// colors
// cli-table
// node-emoji

var requestJson = require("./library/request-json");

var darkSky = "https://api.darksky.net/forecast/3ea9e1be68db69da4cdf571131aa0708/"; // dark sky api key


// This code prompts user for location for googlemaps to figure out longitude and latitude
var myURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

var request = require('request');
var prompt = require('prompt');

var askLocation = function() {
    prompt.get(['city'], function(err, result) {
        if (err) {
            console.log("There is an error somewhere.");
        }
        else {
            var location = result;
            var locationURL = myURL + location.city;
            requestJson(locationURL, function(err, response) {
                if (err) {
                    console.log("There is an error here");
                }
                else {
                    var userLocation = response;
                    var latitude = Number(userLocation.results[0].geometry.location.lat);
                    var longitude = Number(userLocation.results[0].geometry.location.lng);
                    console.log("latitude:", latitude, " longitude:", longitude);
                    
                    var darkSkyURL = darkSky + latitude + "," + longitude;
                    requestJson(darkSkyURL, function(err, response) {
                        if(err) {
                            console.log("we have a problem here");
                        }
                        else {
                            var darkSkyAccess = response.daily;
                            
                            darkSkyAccess.data.forEach(function(day, i){
                            console.log("Day "+(i+1)+ " Highs of "+ day.temperatureMax + 
                            " Lows of "+ day.temperatureMin + " With chances of " + day.precipType);
                            });
                        }
                    });
                }
            });
        }
    });
};

askLocation();









// //=============ACTIVATING MODULES==================
// //importing request Json function from request-as-json.js file
// var requestJson = require('./library/request-as-json');
// var prompt = require('prompt');
// var colors = require('colors');
// var Table = require('cli-table');
// var emoji = require('node-emoji');

// //======================FUNCTION DECLARATION===================
// function toCelsius(tempInF) {
//     return (tempInF - 32) * 5 / 9;
// }

// // //======================TESTING================================
// // var url1 = "http://api.open-notify.org/iss-now.json";


// // //calling the function
// // //success case
// // requestJson(url1, function(error, response) {
// //     if (error) {
// //         console.log("something happened in request function call. try again later");
// //     }
// //     else {
// //         console.log(response);
// //     }
// // });

// //============================================================
// //
// //How's the weather?
// //

// function weather() {


//     prompt.get(['city'], function(err, result) {
//         if (err) {
//             console.log("Error happened. Input city not recognized. Try again later.");
//         }
//         else {
//             //get user input on where they're from
//             console.log("Command line input received.");
//             console.log("Enter the city you live in: ", result.city);

//             //using Google Geocoding API
//             var urlUser = "https://maps.googleapis.com/maps/api/geocode/json?address=" + result.city;

//             //get lattitude and longitude of user's location

//             requestJson(urlUser, function(error, response) {
//                 if (error) {
//                     console.log("Error. URL of user's geolocation not recognized. Try again later.");
//                 }
//                 else {
//                     //getting user's location
//                     var userLatitude = response.results[0].geometry.location.lat;
//                     var userLongitude = response.results[0].geometry.location.lng;
//                     //console.log("User Latitude: ", userLatitude.toFixed(4));
//                     //console.log("User Longitude: ", userLongitude.toFixed(4));

//                     //now that we have user location, request current weather (and then the next 5 days)
//                     //this is the Dark Sky API
//                     var weather_url = "https://api.darksky.net/forecast/0cc176eabc4ede993d379115f3779cf8/" + userLatitude + "," + userLongitude;

//                     //this call will request CURRENT WEATHER
//                     requestJson(weather_url, function(error, response) {
//                         if (error) {
//                             console.log("Error. Weather URL not valid. Try again later.");
//                         }
//                         else {

//                             console.log("Would you like to know the current weather [1] or 5 day weather [2]?");

//                             prompt.get(['number'], function(error, result) {
//                                 if (error) {
//                                     console.log("Error. You did not enter a 1 or 2 for weather output. Try again.");
//                                 }
//                                 else {
//                                     //CURRENT WEATHER OUTPUT
//                                     if (parseInt(result.number) === 1) {
//                                         console.log("\nCURRENT WEATHER:".underline.bold);
//                                         console.log(Date(parseInt(response.currently.time)).blue);
//                                         console.log(response.currently.summary);

//                                         /*
//                                         Write code here for line 74 to output emoji icons if cloudy, sunny, rainy, or snowing
//                                         */
//                                         console.log(response.currently.icon);

//                                         console.log("Temperature: ", toCelsius(parseFloat(response.currently.temperature)).toFixed(2), "\xB0C");
//                                         console.log("Feels like: ", toCelsius(parseFloat(response.currently.temperature)).toFixed(2), "\xB0C");
//                                     }
//                                     //5 DAY WEATHER OUTPUT
//                                     else{ 
//                                         var table = new Table({
//                                             head: ["", "Today", "Day 2", "Day 3", "Day 4", "Day 5"],
//                                             colWidths: [30, 10, 10, 10, 10, 10]
//                                         });
                                        
//                                         //create array of stuff i want (i.e. min temp, max temp)
                                        
//                                         var description = ["Description: "];
//                                         var icon = ["Weather: "];
//                                         var minTemp = ["Minimum Temperature (\xB0C): "];
//                                         var maxTemp = ["Maximum Temperature (\xB0C): "];
                                        
//                                         for (var i = 0; i < 5; i++){
//                                             description.push(response.daily.data[i].summary);
//                                             icon.push(response.daily.data[i].icon);
//                                             minTemp.push(toCelsius( parseFloat(response.daily.data[i].temperatureMin) ).toFixed(2) );
//                                             maxTemp.push(toCelsius( parseFloat(response.daily.data[i].temperatureMax) ).toFixed(2) );
//                                         }
                                        
//                                         table.push(description, icon, minTemp, maxTemp);
                                        
//                                         console.log(table.toString());
//                                     }
//                                 }
//                             })

//                         }
//                     }); //end call for request CURRENT WEATHER

//                 } //bracket for else statement pulling user and weather info
//             }); //end call for request USER info


//         } //bracket for else statement if prompt works
//     }); //end call for prompt.get

// }


// //calling it
// weather();