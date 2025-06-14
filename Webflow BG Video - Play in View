document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll('.demo-video');

  function handleVideoPlayback() {
    videos.forEach((video) => {
      const rect = video.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight) && ((rect.top + rect.height) >= 0);

      video.loop = true; // Ensure the video loops

      if (isVisible) {
        video.play();
      } else {
        video.pause();
      }
    });
  }

  window.addEventListener('scroll', handleVideoPlayback);
  window.addEventListener('resize', handleVideoPlayback);
  handleVideoPlayback(); // Run once on page load
});
