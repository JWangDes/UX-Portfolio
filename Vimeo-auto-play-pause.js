//autoplay vimeo
  document.addEventListener('DOMContentLoaded', function() {
    var iframes = document.querySelectorAll('.vimeo-embed iframe');
    var players = Array.from(iframes).map(function(iframe) { return new Vimeo.Player(iframe); });

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        var player = players.find(function(p) { return p.element === entry.target; });
        if (entry.isIntersecting) {
          player.play();
        } else {
          player.pause();
        }
      });
    }, { threshold: 0.5 });

    iframes.forEach(function(iframe) {
      observer.observe(iframe);
    });
  });
