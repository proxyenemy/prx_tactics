// Инициализация AOS (Animate on Scroll)
AOS.init({
    duration: 1800,  // Длительность анимации в миллисекундах
    once: true,      // Анимация срабатывает только один раз при прокрутке
    easing: 'ease-in-out',  // Тип анимации
  });




  document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // Горизонтальная прокрутка
        loop: true, // Зацикливание слайдов
        autoplay: {
            delay: 3000, // Интервал между прокрутками
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 10, // Расстояние между слайдами
        slidesPerView: 4, // Количество слайдов на экране
        rtl: true // Направление справа налево
    });
});



var tracks = {
  darkTactics: new Howl({
    src: ['audio/dark.mp3'], // Укажите путь к аудиофайлу
    html5: true
  }),
  aggressor: new Howl({
    src: ['audio/Aggressor.mp3'],
    html5: true
  }),
  hylophobia: new Howl({
    src: ['audio/fob.mp3'],
    html5: true
  }),
  lesopolosa: new Howl({
    src: ['audio/les.mp3'],
    html5: true
  })
};

function playTrack(track) {
  // Останавливаем другие треки перед воспроизведением нового
  for (var key in tracks) {
    if (key !== track) {
      tracks[key].stop();
    }
  }
  
  // Воспроизводим выбранный трек
  tracks[track].play();
}


window.addEventListener('load', function() {
  var backgroundMusic = document.getElementById('backgroundMusic');

  backgroundMusic.volume = 0.3;

  // Автоматически воспроизводим трек при загрузке страницы
  backgroundMusic.play().catch(function(error) {
      // Если автоматическое воспроизведение заблокировано, ждем взаимодействия с пользователем
      console.log('Autoplay blocked. Waiting for user interaction.');
      window.addEventListener('click', function() {
          backgroundMusic.play();
      });
  });
});


  
  // Устанавливаем уровень громкости фоновой музыки
  backgroundMusic.volume = 0.3;

  // Попытка автоматического воспроизведения фоновой музыки
  backgroundMusic.play().catch(function(error) {
      // Если воспроизведение блокировано, ждем взаимодействия с пользователем
      console.log('Autoplay blocked. Waiting for user interaction.');
      window.addEventListener('click', function() {
          backgroundMusic.play();
      });
  });





