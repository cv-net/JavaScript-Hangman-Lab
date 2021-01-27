let displayMessage;
let guessHappened = false;

class Hangman {

    constructor(phrase){
        this.phrase = phrase;
        this.guesses = 6;
        this.message = [];
        this.lettersGuess = [];
    }

    getDisplayMessage(){
        if (guessHappened) {
            const regex = /\S/g;
            displayMessage = this.phrase.replace(regex, '*');
        }

        return displayMessage;
    }

    guessLetter(letter){
        var count = 0;
        guessHappened = true;

        const regex = /^\s|^letter/i;

        for (var i = 0 ; i < this.phrase.length ; i++ ) {
            if (letter.toLowerCase() == this.phrase[i].toLowerCase()) {
                count++
            } 
        }
            if (count == 0) {
                this.guesses--;
            } else {
                for (let i = 0 ; i < this.phrase ; i++) {
                    displayMessage = this.phrase.replace(regex, '*');
                    
                }   

            }
    }
    // loop thru phrase. phrase is turned into ** in displaymessage but not globally
    // to make it global

    getRemainingGuesses(){
        return this.guesses;
    }

    isMessageSolved(){
        return false;
    }

}

module.exports = Hangman;