// ui-animations.js — GSAP + Lenis + tsParticles + Cursor + VanillaTilt

(function () {
  'use strict';

  // ─── Lenis Smooth Scroll ───────────────────────────────────────────────────
  function initLenis() {
    if (typeof Lenis === 'undefined') return;
    var lenis = new Lenis({ lerp: 0.08, smooth: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync with GSAP ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);
    }

    // Smooth scroll on anchor links (replaces jQuery easing scroll)
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href === '#') return;
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: -60, duration: 1.4 });
      });
    });
  }

  // ─── Scroll Progress Bar ──────────────────────────────────────────────────
  function initScrollProgress() {
    var bar = document.getElementById('scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', function () {
      var scrolled = window.scrollY;
      var total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = Math.min(100, (scrolled / total) * 100) + '%';
    }, { passive: true });
  }

  // ─── Custom Cursor ────────────────────────────────────────────────────────
  function initCustomCursor() {
    var dot  = document.getElementById('cursor-dot');
    var ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    var mx = 0, my = 0;
    var rx = 0, ry = 0;

    document.addEventListener('mousemove', function (e) {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left  = mx + 'px';
      dot.style.top   = my + 'px';
    }, { passive: true });

    // Ring lerps behind cursor
    (function animateRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animateRing);
    })();

    // Scale on interactive elements
    var interactiveEls = 'a, button, .skill-tab, .portfolio-item, .service-card-new, .bento-card, input, textarea';
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest(interactiveEls)) {
        document.body.classList.add('cursor-hover');
      }
    });
    document.addEventListener('mouseout', function (e) {
      if (e.target.closest(interactiveEls)) {
        document.body.classList.remove('cursor-hover');
      }
    });

    // Hide when leaving window
    document.addEventListener('mouseleave', function () {
      dot.style.opacity  = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', function () {
      dot.style.opacity  = '1';
      ring.style.opacity = '1';
    });
  }

  // ─── tsParticles Hero Background ─────────────────────────────────────────
  function initParticles() {
    if (typeof tsParticles === 'undefined') return;
    tsParticles.load('tsparticles', {
      fpsLimit: 60,
      background: { color: { value: 'transparent' } },
      particles: {
        number: { value: 60, density: { enable: true, area: 900 } },
        color: { value: ['#fca311', '#06b6d4', '#ffffff'] },
        opacity: { value: { min: 0.05, max: 0.3 }, animation: { enable: true, speed: 0.6 } },
        size:    { value: { min: 1, max: 3 } },
        move: {
          enable: true,
          speed: 0.5,
          direction: 'none',
          random: true,
          outModes: 'out'
        },
        links: {
          enable: true,
          distance: 140,
          color: '#ffffff',
          opacity: 0.06,
          width: 1
        }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
          onClick: { enable: false }
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.15 } }
        }
      },
      detectRetina: true
    });
  }

  // ─── Hero Entrance Timeline ───────────────────────────────────────────────
  function initHeroTimeline() {
    if (typeof gsap === 'undefined') return;

    var tl = gsap.timeline({ delay: 0.3 });

    tl.to('.hero-badge',       { opacity: 1, y: 0,  duration: 0.6, ease: 'power3.out' })
      .to('.hero-title',       { opacity: 1, y: 0,  duration: 0.7, ease: 'power3.out' }, '-=0.3')
      .to('.hero-typed',       { opacity: 1, y: 0,  duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .to('.hero-description', { opacity: 1, y: 0,  duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .to('.hero-cta',         { opacity: 1, y: 0,  duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .to('.hero-stats',       { opacity: 1, y: 0,  duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .to('.hero-image-wrap',  { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.4)' }, '-=0.8');

    // Floating image animation
    gsap.to('.hero-image-wrap', {
      y: -14,
      duration: 3.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: 1.5
    });
  }

  // ─── GSAP ScrollTrigger Reveals ───────────────────────────────────────────
  function initScrollReveal() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      // Fallback: simple IntersectionObserver
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            gsap && gsap.to(e.target, { opacity: 1, y: 0, duration: 0.7 });
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.gsap-reveal').forEach(function (el) { io.observe(el); });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Section headers
    document.querySelectorAll('.section-header').forEach(function (el) {
      gsap.from(el, {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      });
    });

    // Bento cards stagger
    gsap.from('.bento-card', {
      opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: { trigger: '.bento-grid', start: 'top 80%', once: true }
    });

    // Skill bar cards stagger
    ScrollTrigger.create({
      trigger: '#skill',
      start: 'top 70%',
      once: true,
      onEnter: function () { triggerSkillBars(); }
    });

    // Service cards stagger
    gsap.from('.service-card-new', {
      opacity: 0, y: 40, duration: 0.65, ease: 'power3.out',
      stagger: 0.07,
      scrollTrigger: { trigger: '#service', start: 'top 75%', once: true }
    });

    // Portfolio items stagger
    gsap.from('.portfolio-item', {
      opacity: 0, y: 35, duration: 0.65, ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: { trigger: '#portfolio', start: 'top 75%', once: true }
    });

    // Testimonial
    gsap.from('.testimonial-card-wrap', {
      opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '#testimonial', start: 'top 80%', once: true }
    });

    // Contact
    gsap.from('.contact-form-wrap', {
      opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '#contact', start: 'top 80%', once: true }
    });
    gsap.from('.contact-info-card', {
      opacity: 0, x: -30, duration: 0.6, ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: { trigger: '#contact', start: 'top 80%', once: true }
    });
  }

  // ─── Skill Bar Animation (fills width on scroll enter) ───────────────────
  function triggerSkillBars() {
    document.querySelectorAll('.skill-bar-card').forEach(function (card, i) {
      var fill = card.querySelector('.skill-bar-fill');
      if (!fill) return;
      var target = fill.dataset.width || '0%';
      setTimeout(function () {
        fill.style.width = target;
      }, i * 40);
    });
  }

  // ─── About Counters ───────────────────────────────────────────────────────
  function initCounters() {
    var counters = document.querySelectorAll('.bento-stat .stat-num[data-target]');
    if (!counters.length) return;

    var triggered = false;

    function runCounters() {
      if (triggered) return;
      triggered = true;
      counters.forEach(function (el) {
        var target = parseInt(el.dataset.target, 10);
        var suffix = el.dataset.suffix || '+';
        var start = 0;
        var duration = 1800;
        var startTime = null;

        function step(ts) {
          if (!startTime) startTime = ts;
          var progress = Math.min((ts - startTime) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(start + eased * (target - start)) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }

    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: '#about',
        start: 'top 70%',
        once: true,
        onEnter: runCounters
      });
    } else {
      var io = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { runCounters(); io.disconnect(); }
      }, { threshold: 0.3 });
      var aboutEl = document.getElementById('about');
      if (aboutEl) io.observe(aboutEl);
    }
  }

  // ─── Magnetic Buttons (Hero CTAs) ─────────────────────────────────────────
  function initMagneticButtons() {
    document.querySelectorAll('.btn-primary-hero, .btn-outline-hero').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top  - r.height / 2;
        btn.style.transform = 'translate(' + x * 0.18 + 'px, ' + y * 0.18 + 'px) translateY(0)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }

  // ─── Navbar Scroll Show/Hide ───────────────────────────────────────────────
  function initNavbar() {
    var nav = document.querySelector('.navbar');
    if (!nav) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 180) {
        nav.style.display = 'flex';
        nav.classList.add('scrolled');
      } else {
        nav.style.display = 'none';
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ─── Back to Top ─────────────────────────────────────────────────────────
  function initBackToTop() {
    var btn = document.querySelector('.back-to-top');
    var scrollDown = document.querySelector('.scroll-to-bottom');
    if (!btn) return;

    function onScroll() {
      if (window.scrollY > 300) {
        // Show back-to-top as flex (for icon centering)
        btn.style.display = 'flex';
        // Fade out the scroll-down hint — it's only for the very top
        if (scrollDown) {
          scrollDown.style.opacity = '0';
          scrollDown.style.pointerEvents = 'none';
        }
      } else {
        btn.style.display = 'none';
        if (scrollDown) {
          scrollDown.style.opacity = '1';
          scrollDown.style.pointerEvents = 'none'; // hint only, not clickable
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on init
  }

  // ─── VanillaTilt on Profile Image ─────────────────────────────────────────
  function initTilt() {
    if (typeof VanillaTilt === 'undefined') return;
    var profileEl = document.querySelector('.bento-profile');
    if (profileEl) {
      VanillaTilt.init(profileEl, { max: 8, speed: 400, glare: false });
    }
    var portfolioItems = document.querySelectorAll('.portfolio-item');
    if (portfolioItems.length) {
      VanillaTilt.init(Array.from(portfolioItems), { max: 4, speed: 300, glare: false });
    }
  }

  // ─── Theme Toggle ─────────────────────────────────────────────────────────
  function initThemeToggle() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      var icon = btn.querySelector('i');
      if (!icon) return;
      if (theme === 'dark') {
        icon.className = 'fas fa-sun';
        btn.title = 'Switch to Light Mode';
      } else {
        icon.className = 'fas fa-moon';
        btn.title = 'Switch to Dark Mode';
      }
    }

    // Sync icon with already-set theme (set by inline script in <head>)
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current);

    btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  // ─── Boot ─────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    initThemeToggle();
    initLenis();
    initScrollProgress();
    initCustomCursor();
    initParticles();
    initHeroTimeline();
    initScrollReveal();
    initCounters();
    initMagneticButtons();
    initNavbar();
    initBackToTop();

    // Defer tilt until after DOM-dependent JS runs
    setTimeout(initTilt, 600);
  });

})();
