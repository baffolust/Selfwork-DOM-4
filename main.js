// querySelectors

let inputForm = document.querySelector("#inputForm");
let playButton = document.querySelector("#playButton");
let countdownSeconds = document.querySelector('#countdownSeconds');


console.dir(inputForm);


// Oggetto countDown

const countDown = {
    
    // secondi di CountDown rimanenti
    secondsLeft : 0,
    
    // metodo per impostare l'elemento secondsLeft

    setSecondsleft : function(seconds){

        this.secondsLeft = seconds;
    },

    // metodo per azionare il countdown    
    startCountdown : function (){
        
        let countdownInterval = setInterval(()=>{
            if(this.secondsLeft >= 0){
                countdownSeconds.innerHTML = this.secondsLeft;
                this.secondsLeft--;
                console.log((this.secondsLeft));
                
            } else {
                clearInterval(countdownInterval);
                this.setSecondsleft(0);
                console.log((this.secondsLeft));
            }
            
        }, 1000);
    },
    
    
    
};


playButton.addEventListener('click',()=>{
    
    if(countDown.secondsLeft ==  0){
        
        countDown.setSecondsleft(inputForm.value);
        countDown.startCountdown();
    } 


    
});


