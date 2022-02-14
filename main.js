let messageStart    = ["Hi", "Hallo", "Servus", "Grüß dich"]
let messageMid      = ["Yen-Thi","Kevin", "Christian", "Christoph"]
let messageEnd      = ["wie gehts?", "was machst du?"]

const getRandomFromArray = array => { return array[Math.floor(Math.random()*array.length)]}
const printRandomSentence = () => { console.log(`${getRandomFromArray(messageStart)} ${getRandomFromArray(messageMid)}, ${getRandomFromArray(messageEnd)}`) }

printRandomSentence()

/*document.getElementById("submit").onclick = function (){ getUserMessage(); }

const daten = {

    Horoskop : {

        wassermann : [
            "Der zwischen dem 21. Januar und 19. Februar geborene Wassermann ist ein individueller Charakter. Sein Planet ist der Saturn und der Uranus und sein Element die Luft. Er ist originell und außergewöhnlich und man findet ihn so kein zweites Mal.",
            ""
        ],
        fische : [
            "Der Fisch besteht aus einem wahren Meer der Gefühle. Geboren zwischen dem 20. Februar und 20. März sind Fische typisch für die Jahreszeit ebenso aufblühend und warm wie der bevorstehende Frühling. Ihr Planet ist der Neptun und ihr Element, wie sollte es anders sein, das Wasser.",
            ""
        ],
        widder : [
            'Ganz getreu dem Motto "Hier bin ich“ ist der Widder ein Kind des Frühlings. Geboren zwischen dem 21. März und dem 20. April sorgen Sie für viel neue Energie in Ihrem Umfeld. Aufbruchsstimmung und Impulsivität kennzeichnet nicht nur Ihren Geburtsmonat, sondern spiegelt sich auch ganz klar in Ihrem Sternbild wider.',
            ""
        ],
        stier : [
            "Wer beim Stier an feurige Leidenschaft und spanische Sommernächte mit Sangria denken muss, der irrt nicht. Der zwischen dem 21. April und 20. Mai geborene Stier ist ein Spiegel seiner Jahreszeit und seines Geburtsmonats. Einerseits ruhig und natürlich wie der Frühling. Andererseits energisch und aufbrausend wie der bevorstehende Sommer.",
            ""
        ],
        zwillinge : [
            "Der zwischen dem 21. Mai und 21. Juni geborene Zwilling ist lebhaft und fröhlich, wie der sommerliche Frühling. Ihr Planet ist der Merkur und ihr Element die Luft. Stets darauf aus zu kommunizieren, spricht der Zwilling aus was er denkt.",
            ""
        ],
        krebs : [
            "Geboren zwischen dem 22. Juni und 22. Juli, ist der Krebs ein richtiges Sommerkind und ist sehr Gefühlsbedacht. Sein Planet ist der Mond und in seinem Element, dem Wasser, fühlt der Krebs sich am Wohlsten. Sein Motto ist „Ich fühle“ und so hat das Sternzeichen einen äußerst mitfühlenden, fürsorglichen und gefühlvollen Charakter.",
            ""
        ],
        löwe : [
            "Geboren zwischen dem 23. Juli und 23. August, ist der Löwe genauso heiß wie der Sommer. Sein Planet ist die Sonne und sein Element das Feuer, ebenso feurig wie die Leidenschaft des Löwen. Die Geschichte vom König des Tierreichs kennt jeder. Er ist stärker, schneller, besser als jedes andere Wesen und kämpft für seinen Thron mit eiserner Herrschaft. Konkurrenz ist ein Fremdwort und Mut und Stolz sein Credo.",
            ""
        ],
        jungfrau : [
            "Die zwischen dem 24. August und 23. September geborene Jungfrau ist gewissermaßen das Abbild ihres Tierkreiszeichens. Ihr Planet ist der Merkur und ihr Element die Erde. Egal, ob Arbeit oder Alltag, alles wird bis ins kleinste Detail analysiert.",
            ""
        ],
        waage : [
            "Die zwischen dem 24. September und 23. Oktober geborene Waage ist das Abbild ihres Tierkreiszeichens. Ihr Planet ist die Venus und ihr Element die Luft. Nichts macht sie glücklicher als Gerechtigkeit und Harmonie, denn sie ist ein ruhiger und friedlicher Geselle.",
            ""
        ],
        skorpion : [
            "Der zwischen dem 24. Oktober und 22. November geborene Skorpion ist tiefgründig wie der goldene Herbst und ruhig wie der bevorstehende Winter. Sein Element ist das Wasser und wie das Wasser ist er meist still und gelassen und gelegentlich aufbrausend und stürmisch. Er ist wie Ebbe und Flut. Nicht umsonst heißt es, stille Wasser sind tief.",
            ""
        ],
        schuetze : [
            "Der zwischen dem 23. November und 21. Dezember geborene Schütze ist ein aktiver und extrovertierter Charakter. Sein Planet ist der Jupiter und sein Element das Feuer. Er ist Leidenschaftlich und stets auf der Suche, um zu wachsen und sich zu entwickeln.",
            ""
        ],
        steinbock : [
            "Der im Jahreswechsel geborene Steinbock ist ein sehr bedachter Charakter. Zwischen dem 22. Dezember und 20. Januar geboren, ist das Sternzeichen Steinbock passend zur Jahreszeit nachdenklich und bodenständig. Handeln aus einer Emotion heraus gehört eher zu den selteneren Fauxpas.",
            ""
        ]

    },

    weisheiten : [

    ],

    witze : [
        "123",
        "456",
        "789"
    ]

}

console.log(daten.witze[2]);

function getUserMessage(){

    let userMessage;
    let random;



    const userName = window.prompt("Hey, wie heißt du?");
    
    userMessage = window.prompt(`Hallo ${userName}, wie kann ich dir Helfen? (Astrologie, Topic 2, Topic 3)`).toLocaleLowerCase();

    if(userMessage === "astrologie"){

        userMessage = window.prompt(`Welches Sternzeichen hast du ${userName}? (Wassermann, Widder, Stier, Zwillinge, Krebs, Löwe, Jungfrau, Waage, Skorpion,Steinbock, Fische)`).toLowerCase

        if(userMessage === "wassermann"){
            userMessage = window.prompt(`Was möchtest du wissen ${userName}? Möchtest du mehr erfahren oder dein tägliches Horoskop lesen? (Schreibe "Mehr" oder "Tägliches Horoskop")`).toLocaleLowerCase
            if(userMessage === "mehr"){
                window.alert(daten.Horoskop.wassermann[0]);
            }
        }

        if(userMessage === "widder"){
            userMessage = window.prompt(`Was möchtest du wissen ${userName}? Möchtest du mehr erfahren oder dein tägliches Horoskop lesen? (Schreibe "Mehr" oder "Tägliches Horoskop")`).toLocaleLowerCase
            if(userMessage === "widder"){
                window.prompt(daten.Horoskop.widder[0]);
            }
        }

        if(userMessage === "stier"){
            userMessage = window.prompt(`Was möchtest du wissen ${userName}? Möchtest du mehr erfahren oder dein tägliches Horoskop lesen? (Schreibe "Mehr" oder "Tägliches Horoskop")`).toLocaleLowerCase
            if(userMessage === "stier"){
                window.alert(daten.Horoskop.stier[0])
            }
        }
        
        if(userMessage === "zwillinge"){
            userMessage = window.prompt(`Was möchtest du wissen ${userName}? Möchtest du mehr erfahren oder dein tägliches Horoskop lesen? (Schreibe "Mehr" oder "Tägliches Horoskop")`).toLocaleLowerCase
            if(userMessage === "zwillinge"){
                window.alert(daten.Horoskop.zwillinge[0])
            }
        }

        if(userMessage === "krebs"){
            userMessage = window.prompt(`Was möchtest du wissen ${userName}? Möchtest du mehr erfahren oder dein tägliches Horoskop lesen? (Schreibe "Mehr" oder "Tägliches Horoskop")`).toLocaleLowerCase
            if(userMessage === "krebs"){
                window.alert(daten.Horoskop.krebs[0])
            }
        }

        if(userMessage === "löwe"){
            userMessage = window.prompt(`Was möchtest du wissen ${userName}? Möchtest du mehr erfahren oder dein tägliches Horoskop lesen? (Schreibe "Mehr" oder "Tägliches Horoskop")`).toLocaleLowerCase
            if(userMessage === "löwe"){
                window.alert(daten.Horoskop.loewe[0])
            }
        }

        if(userMessage === "jungfrau") {
            userMessage = window.prompt(`Was möchtest du wissen ${userName}? Möchtest du mehr erfahren oder dein tägliches Horoskop lesen? (Schreibe "Mehr" oder "Tägliches Horoskop")`).toLocaleLowerCase
            if(userMessage === "jungfrau"){
                window.alert(daten.Horoskop.jungfrau[0])
            }
        }

        if(userMessage === "waage"){
            userMessage = window.prompt(`Was möchtest du wissen ${userName}? Möchtest du mehr erfahren oder dein tägliches Horoskop lesen? (Schreibe "Mehr" oder "Tägliches Horoskop")`).toLocaleLowerCase
            if(userMessage === "waage"){
                window.alert(daten.Horoskop.waage[0])
            }
        }

        if(userMessage === "skorpion"){
            userMessage = window.prompt(`Was möchtest du wissen ${userName}? Möchtest du mehr erfahren oder dein tägliches Horoskop lesen? (Schreibe "Mehr" oder "Tägliches Horoskop")`).toLocaleLowerCase
            if(userMessage === "skorpion"){
                window.alert(daten.Horoskop.skorpion[0])
            }
        }

        if(userMessage === "steinbock"){
            userMessage = window.prompt(`Was möchtest du wissen ${userName}? Möchtest du mehr erfahren oder dein tägliches Horoskop lesen? (Schreibe "Mehr" oder "Tägliches Horoskop")`).toLocaleLowerCase
            if(userMessage === "steinbock"){
                window.alert(daten.Horoskop.steinbock[0])
            }
        }

        if(userMessage === "fische"){
            userMessage = window.prompt(`Was möchtest du wissen ${userName}? Möchtest du mehr erfahren oder dein tägliches Horoskop lesen? (Schreibe "Mehr" oder "Tägliches Horoskop")`).toLocaleLowerCase
            if(userMessage === "fische"){
                window.alert(daten.Horoskop.fische[0])
            }
        }

    } else if (userMessage === "weisheiten") {



    } else if (userMessage === "witz des tages") {

        random = Math.floor(Math.random * daten.witze.length);

        window.alert(daten.witze[random]);

    } else {
        userMessage = window.prompt("Ich habe dich nicht verstanden. Bitte wiederhole deine Nachricht.").toLocaleLowerCase;
    }

}*/