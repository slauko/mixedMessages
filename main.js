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

        const wisdom = [
            'Wenn der Wind sich legt, sehe ich eine Blüte fallen. Weil ein Vogel singt, entdecke ich die Ruhe des Berges.',
            'Der Apfel fällt nicht weit vom Stamm.',
            'Zuerst ignorieren sie dich, dann lachen sie über dich, dann bekämpfen sie dich und dann gewinnst du.',
            'Die Zukunft hängt davon ab, was wir heute tun.',
          ];
          
          // console.log(wisdom);
          
          function getRandomWisdom(wisdom) {
            window.alert(wisdom[Math.floor(Math.random() * wisdom.length)]);
          }
          
          getRandomWisdom(wisdom);

    } else if (userMessage === "witz des tages") {

    } else {
        userMessage = window.prompt("Ich habe dich nicht verstanden. Bitte wiederhole deine Nachricht.").toLocaleLowerCase;
    }

}

