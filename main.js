/*let messageStart    = ["Hi", "Hallo", "Servus", "Grüß dich"]
let messageMid      = ["Yen-Thi","Kevin", "Christian", "Christoph"]
let messageEnd      = ["wie gehts?", "was machst du?"]

const getRandomFromArray = array => { return array[Math.floor(Math.random()*array.length)]}
const printRandomSentence = () => { console.log(`${getRandomFromArray(messageStart)} ${getRandomFromArray(messageMid)}, ${getRandomFromArray(messageEnd)}`) }

printRandomSentence()*/

document.getElementById("submit").onclick = function (){ getUserMessage(); }



function getUserMessage(){

    let userMessage;
    let random;



    const userName = window.prompt("Hey, wie heißt du?");
    
    userMessage = window.prompt(`Hallo ${userName}, wie kann ich dir Helfen? (Topic 1, Topic 2, Topic 3)`).toLocaleLowerCase();

    if(userMessage === "astrologie"){

        if(userMessage === "Wassermann")

    } else if (userMessage === "weisheiten") {



    } else if (userMessage === "witz des tages") {

    } else {
        userMessage = window.prompt("Ich habe dich nicht verstanden. Bitte wiederhole deine Nachricht.").toLocaleLowerCase;
    }

}

