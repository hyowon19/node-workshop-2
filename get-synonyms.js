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
var colors = require('colors');
var prompt = require('prompt');

var getSynonyms = require("./library/synonyms.js");

prompt.get(['word'], function(err, word) {
    if (err) {
        console.log("There is an error in the first section.");
    }
    else {
        word = word.word;
        var newWord = new getSynonyms("34f7de7253e531a60ff98736f56ced36");
        newWord.getSynonyms(word, function(err, result) {
            if (err) {
                console.log("There is an error in the second section." + err);
            }
            else {
                // setting up noun possibilities
                var nounSYN = result.noun ? result.noun.syn : null;
                var nounANT = result.noun ? result.noun.ant : null;
                var nounSIM = result.noun ? result.noun.sim : null;
                var nounREL = result.noun ? result.noun.rel : null;
                
                // setting up adjective possibilities
                var adjectiveSYN = result.adjective ? result.adjective.syn : null;
                var adjectiveANT = result.adjective ? result.adjective.ant : null;
                var adjectiveSIM = result.adjective ? result.adjective.sim : null;
                var adjectiveREL = result.adjective ? result.adjective.rel : null;
                
                // setting up verb possibilities
                var verbSYN = result.verb ? result.verb.syn : null;
                var verbANT = result.verb ? result.verb.ant : null;
                var verbSIM = result.verb ? result.verb.sim : null;
                var verbREL = result.verb ? result.verb.rel : null;
                
                // setting up adverb possibilities
                var adverbSYN = result.abverb ? result.abverb.syn : null;
                var adverbANT = result.adverb ? result.adverb.ant : null;
                var adverbSIM = result.adverb ? result.adverb.sim : null;
                var adverbREL = result.adverb ? result.adverb.rel : null;
                
                console.log("\nYou have selected " + word + ", and here is what we found: \n" );
                
                //printing out noun
                console.log("NOUN                                             ".cyan.bold.underline);
                console.log("Synonyms".green.underline.bold);
                if(!nounSYN) {
                    nounSYN = "";
                    console.log(nounSYN);
                } else {
                    console.log(nounSYN + ".\n");
                }
                console.log("Antonyms".blue.underline.bold);
                if(!nounANT) {
                    nounANT = "";
                    console.log(nounANT);
                } else {
                    console.log(nounANT + ".\n");
                }
                console.log("Similar".yellow.underline.bold);
                if(!nounSIM) {
                    nounSIM = "";
                    console.log(nounSIM);
                } else {
                    console.log(nounSIM + ".\n");
                }
                console.log("Relation".magenta.underline.bold);
                if(!nounREL) {
                    nounREL = "";
                    console.log(nounREL);
                } else {
                    console.log(nounREL + ".\n");
                }
                
                
                //printing out adjective
                console.log("ADJECTIVE                                             ".cyan.bold.underline);
                if(!adjectiveSYN) {
                    adjectiveSYN = "";
                    console.log(adjectiveSYN);
                } else {
                    console.log(adjectiveSYN + ".\n");
                }
                console.log("Antonyms".blue.underline.bold);
                if(!adjectiveANT) {
                    adjectiveANT = "";
                    console.log(adjectiveANT);
                } else {
                    console.log(adjectiveANT + ".\n");
                }
                console.log("Similar".yellow.underline.bold);
                if(!adjectiveSIM) {
                    adjectiveSIM = "";
                    console.log(adjectiveSIM);
                } else {
                    console.log(adjectiveSIM + ".\n");
                }
                console.log("Relation".magenta.underline.bold);
                if(!adjectiveREL) {
                    adjectiveREL = "";
                    console.log(adjectiveREL);
                } else {
                    console.log(adjectiveREL + ".\n");
                }
                
                
                //printing out verb
                console.log("VERB                                             ".cyan.bold.underline);
                if(!verbSYN) {
                    verbSYN = "";
                    console.log(verbSYN);
                } else {
                    console.log(verbSYN + ".\n");
                }
                console.log("Antonyms".blue.underline.bold);
                if(!verbANT) {
                    verbANT = "";
                    console.log(verbANT);
                } else {
                    console.log(verbANT + ".\n");
                }
                console.log("Similar".yellow.underline.bold);
                if(!verbSIM) {
                    verbSIM = "";
                    console.log(verbSIM);
                } else {
                    console.log(verbSIM + ".\n");
                }
                console.log("Relation".magenta.underline.bold);
                if(!verbREL) {
                    verbREL = "";
                    console.log(verbREL);
                } else {
                    console.log(verbREL + ".\n");
                }
                
                
                // printing out adverb
                console.log("ADVERB                                             ".cyan.bold.underline);
                if(!adverbSYN) {
                    adverbSYN = "";
                    console.log(adverbSYN);
                } else {
                    console.log(adverbSYN + ".\n");
                }
                console.log("Antonyms".blue.underline.bold);
                if(!adverbANT) {
                    adverbANT = "";
                    console.log(adverbANT);
                } else {
                    console.log(adverbANT + ".\n");
                }
                console.log("Similar".yellow.underline.bold);
                if(!adverbSIM) {
                    adverbSIM = "";
                    console.log(adverbSIM);
                } else {
                    console.log(adverbSIM + ".\n");
                }
                console.log("Relation".magenta.underline.bold);
                if(!adverbREL) {
                    adverbREL = "";
                    console.log(adverbREL);
                } else {
                    console.log(adverbREL + ".\n");
                }
            }
        });
    }
});