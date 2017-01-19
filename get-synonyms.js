// Synonyms/similar words/equivalent words/commensurate words
// Go to Big Huge Thesaurus and read the documentation for the API
// Get yourself a free API key from their system
// Using this API, we will create a NodeJS app for synonyms
// Creating the API:
// Create a file library/synonyms.js
// In this file, create and export a constructor function called SynonymAPI. It takes an api key as parameter 
// and sets it on the new object
// In the prototype of SynonymAPI, add a function getSynonyms. It takes a word and a callback. It makes a 
// request to the web api and gives back the results as an object to the callback function.
// If there was an error, it should be passed down to the callback
// Creating the program:
// Create a file get-synonyms.js at the root of your project
// Import your module and create an instance using your API key
// Prompt the user for a word
// Using your API, retrieve the synonyms/antonyms/etc. for the input word
// If everything goes well, display all the results to the user in a nice way

var prompt = require('prompt');
// var request = require('request');

var getSynonyms = require("./library/synonyms.js");

// var bigURL = "http://words.bighugelabs.com/api/2/34f7de7253e531a60ff98736f56ced36/"; //WORD/json

// http://words.bighugelabs.com/api/2/34f7de7253e531a60ff98736f56ced36/magic/json
// var apiKey = "34f7de7253e531a60ff98736f56ced36";

prompt.get(['word'], function(err, word) {
   
    if (err) {
        console.log("There is an error in the first section.");
    }
    else {
        // word = word.
        // word = word.toString();
        word = word.word;
        // console.log(typeof word); 
        // console.log(word);
        var newWord = new getSynonyms("34f7de7253e531a60ff98736f56ced36");
        newWord.getSynonyms(word, function(err, result) {
            // console.log('hey2');
            if (err) {
                console.log("There is an error in the second section.");
            }
            else {
                
                
                console.log("You have selected " + word + ", and here is what we found: ");
                console.log(result);
            }
        });
    }
    //     synonym(apiKey);
    //     var 
        
    // }
        // var theWord = word;
        // var myBigURL = bigURL + theWord + "/json";
        // synonym(myBigURL, function(err, response) {
        //     if (err) {
        //         console.log("There is an error in the 2nd section.");
        //     }
        //     else {
        //         var synWord = JSON.parse(response.body);
        //         console.log(synWord);
        //     }
        // });
});


// adjective    
// adverb       
// noun         
// verb         

// synonym      syn
// antonym      ant
// relation     rel
// similar      syn

