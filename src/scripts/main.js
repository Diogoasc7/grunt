document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
            evento.preventDefault();
            let numMax = document.getElementById('numero-maximo').value
            numMax = parseInt(numMax);

            let numRandom = Math.random() * numMax
            numRandom = Math.floor(numRandom + 1);

            document.getElementById('resultado-valor').innerText = numRandom
            document.querySelector('.resultado').style.display = 'block'
        })
})