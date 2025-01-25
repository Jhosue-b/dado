const dado = document.getElementById('dado');

const carasDado = [
    [], // Cara con 0 puntos (no se usará)
    [[50, 50]], // Cara con 1 punto
    [[25, 25], [75, 75]], // Cara con 2 puntos
    [[25, 25], [50, 50], [75, 75]], // Cara con 3 puntos
    [[25, 25], [25, 75], [75, 25], [75, 75]], // Cara con 4 puntos
    [[25, 25], [25, 75], [50, 50], [75, 25], [75, 75]] // Cara con 6 puntos
];

dado.addEventListener('click', () => {
    dado.style.transform = 'rotateY(360deg)';
    setTimeout(() => {
        const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
        dado.innerHTML = ''; // Limpiamos los puntos anteriores
        carasDado[numeroAleatorio].forEach(punto => {
            const puntoDiv = document.createElement('div');
            puntoDiv.classList.add('punto');
            puntoDiv.style.left = punto[0] + '%';
            puntoDiv.style.top = punto[1] + '%';
            dado.appendChild(puntoDiv);
        });
        dado.style.transform = 'rotateY(0)';
    }, 300);
});
