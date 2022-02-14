let messageStart    = ["Hi", "Hallo", "Servus", "Grüß dich"]
let messageMid      = ["Yen-Thi","Kevin", "Christian", "Christoph"]
let messageEnd      = ["wie gehts?", "was machst du?"]

const getRandomFromArray = array => { return array[Math.floor(Math.random()*array.length)]}
const printRandomSentence = () => { console.log(`${getRandomFromArray(messageStart)} ${getRandomFromArray(messageMid)}, ${getRandomFromArray(messageEnd)}`) }

printRandomSentence()