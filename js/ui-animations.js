// Modern UI/UX: Skills grid and section reveal animations
// Skills percentage animation
function animateSkill(card) {
  if (card.classList.contains('animated')) return;
  
  // Get the percentage from the text-muted element
  var percentEl = card.querySelector('.text-muted');
  if (!percentEl) return;
  
  var pct = parseInt(percentEl.textContent, 10);
  if (isNaN(pct)) return;

  // Start the animation
  var start = null;
  function step(ts) {
    if (!start) start = ts;
    var progress = Math.min(1, (ts - start) / 900);
    var eased = 1 - Math.pow(1 - progress, 3);
    var display = Math.round(eased * pct);
    percentEl.textContent = display + '%';
    
    if (progress < 1) requestAnimationFrame(step);
    else { 
      card.classList.add('animated');
    }
  }
  requestAnimationFrame(step);
}

// Section reveal animation
function setupSectionReveal() {
  if (!('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-animate]').forEach(function(el) {
    el.classList.add('reveal');
    io.observe(el);
  });
  document.querySelectorAll('section, .service-card, .skill').forEach(function(el) {
    if (!el.hasAttribute('data-animate')) {
      el.classList.add('reveal');
      io.observe(el);
    }
  });
}

// Skills grid observer
function setupSkillsGrid() {
  if (!('IntersectionObserver' in window)) return;
  var observer = new IntersectionObserver(function(entries, obs) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateSkill(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  // Observe all skill cards that have the reveal class
  document.querySelectorAll('.card.reveal').forEach(function(card) {
    observer.observe(card);
  });
}

// Auto-init on DOMContentLoaded
window.addEventListener('DOMContentLoaded', function() {
  setupSectionReveal();
  setupSkillsGrid();
});
