// querySelectors

let inputForm = document.querySelector("#inputForm");
let playButton = document.querySelector("#playButton");
let pauseButton = document.querySelector('#pauseButton');
let clearButton = document.querySelector('#clearButton');
let countdownSeconds = document.querySelector('#countdownSeconds');


console.dir(inputForm);


// Oggetto countDown

const countDown = {
    
    // secondi di CountDown rimanenti
    secondsLeft : 0,
    countdownInterval : null,
    
    // metodo per impostare l'elemento secondsLeft
    
    setSecondsleft : function(seconds){
        
        this.secondsLeft = seconds;
    },
    
    
    // metodo per azionare il countdown    
    startCountdown : function (){
        
        // aggiunto controllo di intervallo attivo per evitare errore in caso di pressione ripetuta del tasto play quando arriva secondsLeft arriva a 0
        if (this.countdownInterval !== null) {
            clearInterval(this.countdownInterval);
            this.countdownInterval = null;
        }
        
        // algoritmo di countdown
        this.countdownInterval = setInterval(()=>{
            if(this.secondsLeft >= 0){
                countdownSeconds.innerHTML = this.secondsLeft;
                this.secondsLeft--;
                console.log((this.secondsLeft));
            } else {
                clearInterval(this.countdownInterval);
                this.setSecondsleft(0);
                this.countdownInterval = null;
                console.log((this.secondsLeft));
            }
        }, 1000);
    },
    
    // metodo per mettere in pausa il countdown
    pauseCountdown : function (){
        clearInterval(this.countdownInterval);
        this.countdownInterval = null;
    },

    // metodo per pulire il countdown e il form
    clearCountdown : function (){
        clearInterval(this.countdownInterval);
        this.countdownInterval = null;
        this.setSecondsleft(0);
        inputForm.value = null;

    }
    
};


// Azione startCountdown al click sul bottone Play
playButton.addEventListener('click',()=>{
    
    if(inputForm.value < 0){
        alert("Inserire un numero maggiore di 0");
    }

    // Controllo: countdown azzerato e valore non vuoto inserito nel form
    if(countDown.secondsLeft == 0 && inputForm.value != ""){
        countDown.setSecondsleft(inputForm.value);
        countDown.startCountdown();
    }
    // controllo per evitare lo stop dell'intervallo in corso in caso di ripetuta pressione del tasto play
    else if(countDown.secondsLeft > 0  && countDown.countdownInterval == null){
        countDown.startCountdown();
    }
});

// Azione startCountdown al click sul bottone Play
pauseButton.addEventListener('click', ()=>{
    countDown.pauseCountdown();
});

// Azione clearCountdown al click sul bottone Clear
clearButton.addEventListener('click', ()=>{
    countDown.clearCountdown();
    countdownSeconds.innerHTML = 0;
});


