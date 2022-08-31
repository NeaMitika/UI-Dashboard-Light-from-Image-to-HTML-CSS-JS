function toggleMenu() {

    const navigazione = document.querySelector('.navigazione');
    const navigazioneColapsed = document.querySelector('.pulsante-toggle-menu');

    if (navigazione.classList.contains('animate__fadeOutLeft')) {

        navigazione.classList.remove("animate__fadeOutLeft");
        navigazione.classList.add("animate__fadeInLeft");
        document.querySelector('.contenuto-centrale').style.marginLeft = '380px';

        navigazioneColapsed.classList.add('animate__fadeOutLeft');
        navigazioneColapsed.classList.remove('animate__fadeInLeft');


    } else if (navigazione.classList.contains('animate__fadeInLeft')) {

        navigazione.classList.remove("animate__fadeInLeft");
        navigazione.classList.add("animate__fadeOutLeft");
        document.querySelector('.contenuto-centrale').style.marginLeft = '140px';

        navigazioneColapsed.classList.add('animate__fadeInLeft');
        navigazioneColapsed.classList.remove('animate__fadeOutLeft');

    } else {

        navigazione.classList.add("animate__fadeOutLeft");
        document.querySelector('.contenuto-centrale').style.marginLeft = '140px';

        navigazioneColapsed.classList.add('animate__fadeInLeft');
    }

}


// Dati per il Grafico

const ctx = document.getElementById('grafico').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: { 
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: 'Numero di Utenti',
            data: [1, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    
});

myChart.canvas.parentNode.style.width = '50%';