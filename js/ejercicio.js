

function reiniciar() {
   
    document.getElementById('reiniciar').addEventListener('click', function() {
        
        document.getElementById('img').src = '/img/pnegro.jpg';
        document.getElementById('attempts').textContent = 'Intentos: '; 
        document.getElementById('mensaje2').textContent = ''
        document.getElementById('mensaje').textContent = ''
    });
}




var score = 0; 
var attempts = 0;


function optrue() {
    document.getElementById('correcto').addEventListener('click', function() {
        attempts++;
        if (attempts === 1) {
            score += 5; 
        } else if (attempts === 2) {
            score += 3; 
        } else if (attempts === 3) {
            score += 1; 
        } else {
            attempts = 0; 
        }
        document.getElementById('score1').textContent ='Puntaje: ' + score; 
        document.getElementById('attempts').textContent = 'Intentos: ' + attempts; 
        document.getElementById('img').src = '/img/pcolor.jpg';
        document.getElementById('mensaje').textContent = 'Felicitaciones, has seleccionado la opción correcta'
    });
}

function inco1() {
    document.getElementById('incorrecto1').addEventListener('click', function() {
        attempts++; 
        document.getElementById('attempts').textContent = 'Intentos: ' + attempts; 
        document.getElementById('mensaje2').textContent = 'Pokémon incorrecto, intentalo nuevamente'
    });
}

function inco2() {
    document.getElementById('incorrecto2').addEventListener('click', function() {
        attempts++; 
        document.getElementById('attempts').textContent = 'Intentos: ' + attempts; 
        document.getElementById('mensaje2').textContent = 'Pokémon incorrecto, intentalo nuevamente'
    });
}

function inco3() {
    document.getElementById('incorrecto3').addEventListener('click', function() {
        attempts++; 
        document.getElementById('attempts').textContent = 'Intentos: ' + attempts; 
        document.getElementById('mensaje2').textContent = 'Pokémon incorrecto, intentalo nuevamente'
    });
}


