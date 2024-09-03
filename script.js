document.addEventListener('DOMContentLoaded', function() {
  let percentage = 0;
  const percentageElement = document.querySelector('.loading-percentage');
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');
  
  const loadingInterval = setInterval(function() {
      percentage += 10;
      percentageElement.textContent = percentage + '%';
      
      if (percentage >= 100) {
          clearInterval(loadingInterval);
          loadingScreen.style.opacity = 0;
          setTimeout(() => {
              loadingScreen.style.display = 'none';
              mainContent.style.display = 'block';
              document.body.classList.add('loaded');
          }, 500);
      }
  }, 200);

  // ヘッダーの実装
  document.addEventListener('DOMContentLoaded', function() {
    const notificationLink = document.querySelector('header nav ul li:nth-child(2) a');
    const contentLink = document.querySelector('header nav ul li:nth-child(3) a');

    notificationLink.addEventListener('click', function(event) {
        event.preventDefault();
        const notificationsSection = document.querySelector('.notifications h2');
        notificationsSection.scrollIntoView({ behavior: 'smooth' });
    });

    contentLink.addEventListener('click', function(event) {
        event.preventDefault();
        const contentSection = document.querySelector('.content h2');
        contentSection.scrollIntoView({ behavior: 'smooth' });
    });
});

  // スライドショーの実装
  let slideIndex = 0;
  const slides = document.querySelectorAll('#slideshow img');
  function showSlides() {
      slides.forEach((slide, index) => {
          slide.style.display = index === slideIndex ? 'block' : 'none';
      });
      slides[slideIndex].style.animation = 'slideIn 0.5s ease'; // スライドインアニメーションを適用
      slideIndex = (slideIndex + 1) % slides.length;
  }
  setInterval(showSlides, 3000);

  // 日数カウント
  const startDate = new Date('2022-09-26'); // 開始日を設定
  const today = new Date();
  const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24) + 1);
  document.getElementById('days-count').textContent = daysPassed;
});