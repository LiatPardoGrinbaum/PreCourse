"use strict";

var figlet = require('figlet');                  //making the hanged man drawing using figlet library

console.log(figlet.textSync('Hanged Man', {
    font: 'doom',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));


let words = ['strawberry','wonderland', 'computer', 'love',              //Define an array with several words
            'sunshine', 'pineapple', 'jungle','necklace', 
            'engineering', 'extraordinary', 'apple', 'green', 'blue'];
let randomWord = words[Math.floor(Math.random()*words.length)];         // getting a random word by getting a random index of the array using math methods (floor and random)
let hiddenWord = randomWord.replace(/[a-z]/ig, '*');                    // creating a new string which all of its letters hidden by asterisks, using regular expression (any letter will be replaced with an asterisk)
let hiddenWordArr = hiddenWord.split("");                               // creating an array (by split method), which will be changed later (because the string itself is imutable)
let newWordGuess = "";                               //declaring a varible that will be used inside a while loop later

const prompt=require('prompt-sync')();            //a declartion required so I can use the propt function later
console.log("Hello!\nYou have to guess a letter at a time.\nAfter every time, you may guess the entire word.\nYou have 10 attempts. Let's Play!\n")
let guessesLeft = 10;                             //maximum number of attempts

/* 2 functions will be used:
// I create a function named isValid that takes 1 parameter and returns the input value of the user,
the input should not be any other sign except a letter (not case sensitive)
and that the user typed only one charecter. else- call the function again ang again until it gets the right input and then returns it.
(I used regular expression and test method that return true if the string charecter contain only letters none case sensitive) 

the function isWordValid takes 2 parameters, the entire guessed word and the randomal word length.
it checks if the word contain only letters and in the same length size of the randomal word.
It returns the right word if it fits the conditions, else it calls the same function again until it gets the right input.
used regular expression and test methods as mention before.
    */
function isValid (userGuess) {                                            
    if ((/^[a-z]+$/i).test(userGuess) && (userGuess.length === 1)) {       
        return userGuess;        
    } else {
        userGuess = prompt("Invalid. Please enter only one letter charecter: "); 
        return isValid(userGuess);
    }
}

function isWordValid (userWordGuess, length) {                                            
    if ((/^[a-z]+$/i).test(userWordGuess) && (userWordGuess.length === length)) {       
        return userWordGuess;        
    } else {
        userWordGuess = prompt("Invalid. Please enter a word with " + length + " letters charecters: "); 
        return isWordValid(userWordGuess, length);
    }
}

console.log("You have " + guessesLeft + " guesses left");  //telling the user how many guesses he\she has.
console.log("The word is " + hiddenWord);                  //showing the user the hidden-asterisk word

// A while loop with the main game, more explanations besides the code:
while (guessesLeft > 0) {

    let guess = prompt("Please guess one letter: ");  //taking user's input and save it in a varaible named "guess"
    let newGuess = isValid(guess);                    // getting the valid guess by calling the isValid function
    if (randomWord.includes(newGuess)) {              //the expression is true only if the random word contains the user's charecter guess
        if (hiddenWord.includes(newGuess)) {          //checking if the letter was already chosen before and propt a message
            console.log("You have already chosen this letter before. Choose another letter");
            continue;                              //continue - go back to the beginning of the loop if the letter was chosen before, without penalty (not losing the attempt)
        }
        for (let i = 0; i < randomWord.length; i+=1) {   //a for loop - comparing every charecter of the random word to the charecter the user chose
            if (randomWord[i] === newGuess) {               //if theres a match:
                hiddenWordArr[i] = newGuess;                //the asterisk of the hidden word array at the same index of the random word would be replaced with the user's guess
            } 
        }
        hiddenWord = hiddenWordArr.join("");       //coverting the updated hidden words array to a string, so I can compare it with the random word
        if (randomWord === hiddenWord) {           //if theres a match- break out of the loop
            break;                                 //breaking out of the while loop. the user has guessed the right word.
        }
    } else {                 //if the word doesn't include the user guess letter, it means that the user was wrong and now the user will lose an attempt (guess)
        guessesLeft-=1;      //decreasing the number of attempts by one
    }
    console.log("The word is " + hiddenWord);                           //telling the user the current status of the word (asterisks\letters\combine) so the user can make a good guess.
    let yesOrNo = prompt("Do you want to guess the word? y / n : " );   //letting the user the possibility to choose if to guess the entire word or not
    if (yesOrNo === 'y') {                                         // if yes 
        let wordGuess = prompt("Please guess the word: ");         // asking the user to guess the word
        newWordGuess = isWordValid(wordGuess, randomWord.length);  // getting the valid guess by calling isWordValid function
        if (newWordGuess === randomWord) {                         //if theres a match- break out of the loop
            break;                                        
        } else {
            console.log("Sorry that's not the word...")               // Prompting a message if the user didn't guessed the word
            console.log("You have " + guessesLeft + " guesses left"); // telling the user how many guesses he\she has
        }
    } else {                                                         // else- if the user doesn't want to guess the word
        console.log("You have " + guessesLeft + " guesses left");    // continue- go to the beginning of the loop and continue the game
        continue;
    } 
}
 

// here is outside the while loop:
//we get here after we get out of the loop (in two cases: in a case the user
//has won or in the case he has lost and didn't have any other attempts to use)

 // if the random word equals to the hidden-guessed word (guessed by letters)
 // or if the entire word was guessed, it means the user has won the game, otherwise he has lost the game.                                    
if ((randomWord == newWordGuess) || (randomWord == hiddenWord)) {    
    console.log("\nWow you are good! The word is " + randomWord);
} else {
    console.log("\nToo bad. You have no guesses left.");  
}
