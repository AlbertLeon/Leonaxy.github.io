const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const videos = document.querySelectorAll('.slideshow video');

menuToggle.addEventListener('click', function() {
  sidebar.classList.toggle('open');
  menuToggle.classList.toggle('open');
});

videos.forEach(video => {
  video.muted = true;

  video.addEventListener('click', function() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  video.addEventListener('play', function() {
    videos.forEach(vid => {
      if (vid !== video) {
        vid.pause();
      }
    });
  });
});
