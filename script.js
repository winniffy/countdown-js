
const secondsInput = document.querySelector('.seconds_input');
const enterBtn = document.querySelector('.enter_btn');
const startBtn = document.querySelector('.start_btn');
const resetBtn = document.querySelector('.reset_btn');

const hours = document.querySelector('.hours');
const mins = document.querySelector('.mins');
const seconds = document.querySelector('.secs');
const audio = document.getElementById('audio');

let countdown, countdownMins;
hours.textContent = '00';
mins.textContent = '00';
seconds.textContent = '00';


function enterInputValue() {
    const hoursInput = String(Math.floor(secondsInput.value/3600)).padStart(2, 0);
    const minsInput = String(Math.floor(secondsInput.value/60)).padStart(2, 0);

    hours.textContent = hoursInput;
    mins.textContent = minsInput;
    seconds.textContent = `${(secondsInput.value<10?'0':'') + secondsInput.value}`;
    // secondsInput.value = '';
};

function enterKey(e) {
    if(e.key === "Enter") {
        enterInputValue(e)
    }
};

document.addEventListener('keydown', enterKey);


// enter button
enterBtn.addEventListener('click', enterInputValue);

// start button to begin countdown
startBtn.addEventListener('click', function(){
    let secs = secondsInput.value;
    

    countdown = setInterval(() => {
        secs--;
        if(secs > 0) {
            // const hours = String(Math.floor(secs/3600)).padStart(2, 0);
            // const mins = String(Math.floor(secs/60)).padStart(2, 0);

            // hours.textContent = hours;
            // mins.textContent = mins;
            seconds.textContent = `${(secs<10?'0':'') + secs}`;
        } else {
            seconds.textContent = '00'
            secondsInput.value = '';
            clearInterval(countdown);
            audio.play();

        }
    }, 1000)

    countdownMins = setInterval(() => {
        let minsValue = Number(mins.textContent);
        minsValue--;
        const mins = String(Math.floor(secs/60)).padStart(2, 0);
        minsValue = mins.textContent;
    }, 60000)
})

// reset button
resetBtn.addEventListener('click', function(){
    secondsInput.value = '';
    hours.textContent = '00';
    mins.textContent = '00';
    seconds.textContent = '00';

    if (countdown) {
        clearInterval(countdown);
        audio.play();
    }
})