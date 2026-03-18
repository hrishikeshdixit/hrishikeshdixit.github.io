function revealAll() {
    document.querySelectorAll('.reveal').forEach(function(el) {
      el.classList.add('visible');
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  // Force reveal on mobile immediately
  if (window.innerWidth <= 768) {
    revealAll();
  } else if ('IntersectionObserver' in window) {
    var els = document.querySelectorAll('.reveal');
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e, i) {
        if (e.isIntersecting) {
          setTimeout(function() { e.target.classList.add('visible'); }, i * 90);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function(el) { obs.observe(el); });
    setTimeout(revealAll, 800);
  } else {
    revealAll();
  }