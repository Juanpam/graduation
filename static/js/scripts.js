window.onload = function () {
    toTextEl = document.getElementById('toText');
    fromTextEl = document.getElementById('fromText');
    recipientEl = document.getElementById('recipient');
    cardTextEl = document.getElementById('card-text');
    playButtonEl = document.getElementById('playButton');

    document.body.classList.add('stopped');

    playButtonEl.addEventListener("click", onButtonClick);

    function onButtonClick() {
        // console.log('Button was clicked');
        showPage();
        // videoEl.play().then(() => {
        //     console.log('I was able to play ´');
        // }).catch(() => {
        //     // console.log('I was NOT able to play music');
        // });
    }

    function showPage() {
        document.body.classList.remove('stopped');
        playButtonEl.classList.add('hidden');
        document.getElementById('message').classList.remove('hidden');
      }

    // This is the last element reproducing its animation
    fromTextEl.addEventListener("animationend", function() {
        // console.log('Animations ended');
        let introText = "Por medio de la presente queremos felicitar a una persona muy especial para nosotros:\n\n";
        let name = "<b>Marcelona!!!</b>"
        let finalText = "\n\nA continuación, algunas palabras..."
        let miaw = '\n\n<video id="video" controls><source src="static/congrats.mp4" type="video/mp4"></video>';
        let index = 0;
        let speed = (1000/60) * 5;
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
                        videoEl = document.getElementById('video');
                        videoEl.currentTime = 5;
                        videoEl.play().then(() => console.log())
                    }
                }, speed);
            }
        }, speed);
    }, false);

}