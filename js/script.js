const milessegundosEl = document.querySelector("#milessegundos");
const segundosEl = document.querySelector("#segundos");
const minutosEl = document.querySelector("#minutos");
const startBtn = document.querySelector("#iniciar");
const pauseBtn = document.querySelector("#pausar");
const continueBtn = document.querySelector("#continuar");
const resetBtn = document.querySelector("#reset");

let intervalo;
let milessegundos = 0;
let segundos = 0;
let minutos = 0;
let isPaused = false;

// Funções
function btnIniciar() {

    intervalo = setInterval(() => {
        
        if (!isPaused) {
            milessegundos += 10;

            if (milessegundos === 1000) {
                milessegundos = 0;
                segundos++;
            }

            if (segundos == 60) {
                segundos = 0;
                minutos++;
            }
        }

        milessegundosEl.textContent = formatMiles(milessegundos);
        segundosEl.textContent = formatTime(segundos);
        minutosEl.textContent = formatTime(minutos);

    }, 10);

    pauseBtn.style.display = "inline-block";
    startBtn.style.display = "none";
};

function btnPause() {
    isPaused = true;
    pauseBtn.style.display = "none"; 
    continueBtn.style.display = "inline-block";
};

function btnContinuar() {
    isPaused = false
    continueBtn.style.display = "none";        
    pauseBtn.style.display = "inline-block"; 
};

function btnResetar(){
    clearInterval(intervalo);
    milessegundos = 0;
    segundos = 0;
    minutos = 0;

    milessegundosEl.textContent = "000";
    segundosEl.textContent = "00";
    minutosEl.textContent = "00";

    continueBtn.style.display = "none";
    pauseBtn.style.display = "none"; 
    startBtn.style.display = "inline-block";

    if (isPaused) {
        isPaused = false;
    }

};

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
};

function formatMiles(time) {
    return time < 100 ? time.toString().padStart(3, "0") : time;
};

// Eventos

startBtn.addEventListener("click", () => {
    btnIniciar();
});

pauseBtn.addEventListener("click", () => {
    btnPause();
});

continueBtn.addEventListener("click", () => {
    btnContinuar();
});

resetBtn.addEventListener("click", () => {
    btnResetar();
});



