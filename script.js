// Función auxiliar para alternar la visibilidad de un popup con animación.
function togglePopup(popupElement) {
  if (popupElement.classList.contains("show")) {
    popupElement.classList.remove("show");
    setTimeout(() => {
      popupElement.style.display = "none";
    }, 500);
  } else {
    popupElement.style.display = "block";
    requestAnimationFrame(() => {
      popupElement.classList.add("show");
    });
  }
}

const moon         = document.getElementById('moon');
const tulip        = document.getElementById('tulip');
const petunia      = document.getElementById('petunia');
const musicPopup   = document.getElementById('musicPopup');
const photosPopup  = document.getElementById('photosPopup');
const music        = document.getElementById('music');
const photoCaption = document.getElementById('photoCaption');

// Al hacer clic en la luna se inicia la animación "open" (iluminación)
// y luego se muestran las flores tras 1 segundo.
moon.addEventListener('click', () => {
  moon.classList.add('open');
  
  moon.addEventListener('animationend', function handler(e) {
    if (e.animationName === 'openMoon') {
      moon.classList.remove('open');
      moon.removeEventListener('animationend', handler);
    }
  });
  
  setTimeout(() => {
    tulip.style.display = 'block';
    petunia.style.display = 'block';
  }, 1000);
});

// Al pulsar el tulipán se muestra/oculta el popup de música.
tulip.addEventListener('click', (e) => {
  e.stopPropagation();
  if (musicPopup.style.display === "block") {
    togglePopup(musicPopup);
    music.pause();
  } else {
    togglePopup(musicPopup);
  }
});

// Al pulsar la petunia se muestra/oculta el popup de fotos.
petunia.addEventListener('click', (e) => {
  e.stopPropagation();
  togglePopup(photosPopup);
});

// Cada imagen del popup de fotos mostrará su frase (caption) al hacer clic.
const photoImages = document.querySelectorAll('.photo-row img');
photoImages.forEach((img) => {
  img.addEventListener('click', () => {
    photoCaption.textContent = img.dataset.caption;
  });
});

// Generación dinámica de estrellas para el fondo.
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 150; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top  = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDuration = `${2 + Math.random() * 3}s`;
  starsContainer.appendChild(star);
}
