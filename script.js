
var nvbCliks = 0;

function createBackgroundHearts() {
    const loveContainer = document.querySelector('.love');
    
    // Ajuster le nombre de cœurs selon la taille de l'écran
    let heartCount = 65; // Par défaut pour desktop
    
    if (window.innerWidth <= 480) {
        heartCount = 30;
    } else if (window.innerWidth <= 768) {
        heartCount = 45;
    }

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'hearts';

        // Positions aléatoires sur toute la page
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        // Taille aléatoire pour donner de la profondeur
        const size = Math.random() * 1.5;

        // Délai d'animation aléatoire pour qu'ils ne bougent pas tous en même temps
        const delay = Math.random() * 5;
        const duration = 3 + Math.random() * 3;

        heart.style.left = x + '%';
        heart.style.top = y + '%';
        heart.style.transform = `rotate(-45deg) scale(${size})`;
        heart.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

        loveContainer.appendChild(heart);
    }
}

// Recréer les cœurs lors du redimensionnement de la fenêtre
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Supprimer les anciens cœurs
        const oldHearts = document.querySelectorAll('.hearts');
        oldHearts.forEach(heart => heart.remove());
        // Recréer avec le nouveau nombre
        createBackgroundHearts();
    }, 250); // Attendre 250ms après la fin du redimensionnement
});

window.onload = createBackgroundHearts;

function closeAlert() {
    document.getElementById('custom-alert').style.display = 'none';
}

function quote() {
    const today = new Date().toISOString().split('T')[0];
    let lastDate = localStorage.getItem('lastClickDate');
    let clicks = parseInt(localStorage.getItem('nbClicks')) || 0;
    
    if (lastDate !== today) {
        clicks = 0;
        localStorage.setItem('lastClickDate', today);
    }
    
    if (clicks >= 15) {
        document.getElementById('custom-alert').style.display = 'block';
        return;
    }
    
    const citations = [
        "Tu es ma raison préférée de sourire",
        "Ensemble, c'est l'endroit où je préfère être",
        "La vie est plus douce avec toi",
        "Tu illumines ma vie",
        "T'aimer est mon passe-temps préféré",
        "Vieillissons et prenons des rides ensemble",
        "Soyons toujours bizarres ensemble",
        "Je ne peux pas imaginer la vie sans toi",
        "Mon cœur est à toi, aujourd'hui et toujours",
        "Chaque jour est meilleur avec toi à mes côtés",
        "Tu es mon cœur, mon amour, mon tout",
        "Ton sourire est ma météo préférée",
        "Tu es la plus belle chose qui me soit arrivée",
        "Mon endroit préféré au monde ? Tes bras",
        "À tes côtés, je me sens enfin chez moi",
        "Tu es le 'et ils vécurent heureux' de mon histoire",
        "Je t'aime un peu plus chaque seconde",
        "Tu es mon plus beau voyage",
        "Rien n'est parfait, mais nous si",
        "Tu es mon soleil dans la tempête",
        "Mon bonheur porte ton nom",
        "Chaque chanson d'amour me fait penser à toi",
        "Tu es le meilleur chapitre de ma vie",
        "On se complète comme la lune et les étoiles",
        "Je t'aime pour tout ce que tu es",
        "Mon cœur bat au rythme du tien",
        "Tu es ma plus belle pensée",
        "Avec toi, le temps s'arrête",
        "Tu es mon évidence",
        "Merci d'être toi, simplement",
        "Ton amour est mon plus beau cadeau",
        "Je choisirais de t'aimer encore mille fois",
        "Tu es mon port d'attache",
        "Perdu dans tes yeux, je me retrouve",
        "Tu es mon plus grand trésor",
        "L'amour, c'est nous deux",
        "Tu es ma dose de bonheur quotidienne",
        "Rien n'est trop beau pour nous",
        "Tu es l'arc-en-ciel après la pluie",
        "Mon cœur n'a d'yeux que pour toi",
        "Tu es ma douce mélodie",
        "Plus que tout, plus que tout le reste",
        "Tu es mon étoile du berger",
        "Aimer, c'est voir l'infini dans tes yeux",
        "Tu es le sucre de ma vie",
        "Chaque baiser est une nouvelle aventure",
        "Je t'aime plus qu'hier et moins que demain",
        "Tu es mon secret le mieux gardé",
        "Rien ne vaut ton regard au réveil",
        "Tu es ma définition de l'amour",
        "Pour toujours et à jamais"
    ];
    
    const random = Math.floor(Math.random() * citations.length);
    document.getElementById('citation').textContent = citations[random];
    
    clicks++;
    localStorage.setItem('nbClicks', clicks);
}

// Écouteur sur le bouton
document.getElementById("button").addEventListener("click", quote);

// Fermer la modale en cliquant en dehors
window.onclick = function(event) {
    const modal = document.getElementById('custom-alert');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
