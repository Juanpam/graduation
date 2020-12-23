window.onload = function () {
    toTextEl = document.getElementById('toText');
    fromTextEl = document.getElementById('fromText');
    recipientEl = document.getElementById('recipient');
    cardTextEl = document.getElementById('card-text');

    // This is the last element reproducing its animation
    fromTextEl.addEventListener("animationend", function() {
        // console.log('Animations ended');
        let introText = "Estas cordialmente invitada a pasar 2 dias y 1 noche de descanso en el lujoso Spa Terapéutico Integral:\n\n";
        let name = "<b>Casa Arboleda!!!</b>"
        let finalText = "\n\nPara redimirlos, por favor dirigete a la oficina de osito e indica la fecha en la que te gustaria ir!"
        let miaw = '\n\n<span id="miaw">😺😸</span>';
        let index = 0;
        let speed = (1000/60) * 3;
        let intervalID = setInterval(() => {
            if(index < introText.length) {    
                cardTextEl.innerHTML += introText[index];
                index++;
            } else {
                cardTextEl.innerHTML += name;
                clearInterval(intervalID);
                index = 0;
                intervalID = setInterval(() => {
                    if(index < finalText.length) {    
                        cardTextEl.innerHTML += finalText[index];
                        index++;
                    } else {
                        clearInterval(intervalID);
                        cardTextEl.innerHTML += miaw;
                    }
                }, speed);
            }
        }, speed);
    }, false);

}