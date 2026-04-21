(function ($) {
  'use strict';

  // ─── Typed.js ─────────────────────────────────────────────────────────────
  if ($('.typed-text-output').length === 1) {
    var typedStrings = $('.typed-text').text();
    new Typed('.typed-text-output', {
      strings: typedStrings.split(', '),
      typeSpeed: 90,
      backSpeed: 25,
      smartBackspace: false,
      loop: true
    });
  }

  // ─── Skills — bar card rendering ──────────────────────────────────────────
  function normalizeSkillFilter(category) {
    var c = (category || '').toString().trim().toLowerCase();
    if (c === 'frontend') return 'web';
    if (c === 'backend') return 'backend';
    if (c === 'database') return 'backend';
    if (c === 'architecture') return 'backend';
    if (c === 'cloud') return 'cloud';
    if (c === 'ai') return 'ai';
    if (c === 'messaging') return 'backend';
    return 'tools';
  }

  var skillsContainer = document.getElementById('skills-grid-container');
  if (skillsContainer && typeof skills !== 'undefined' && Array.isArray(skills)) {
    skills.forEach(function (skill) {
      var cat = normalizeSkillFilter(skill.category);
      var card = document.createElement('div');
      card.className = 'skill-bar-card';
      card.dataset.category = cat;
      card.innerHTML =
        '<div class="skill-icon-box"><i class="' + skill.icon + '"></i></div>' +
        '<div class="skill-info">' +
          '<span class="skill-name-text">' + skill.name + '</span>' +
          '<div class="skill-bar-track">' +
            '<div class="skill-bar-fill" data-width="' + skill.level + '"></div>' +
          '</div>' +
        '</div>' +
        '<span class="skill-pct">' + skill.level + '</span>';
      skillsContainer.appendChild(card);
    });

    document.dispatchEvent(new CustomEvent('skills:rendered', {
      detail: { count: skills.length }
    }));
  }

  // ─── Skill Tab Filtering ───────────────────────────────────────────────────
  document.querySelectorAll('.skill-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.skill-tab').forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');

      var filter = tab.dataset.filter;
      document.querySelectorAll('.skill-bar-card').forEach(function (card) {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
          // Re-trigger bar animation for visible cards
          var fill = card.querySelector('.skill-bar-fill');
          if (fill) {
            fill.style.width = '0%';
            setTimeout(function () { fill.style.width = fill.dataset.width; }, 80);
          }
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ─── Services — render from dom.js ────────────────────────────────────────
  var servicesContainer = document.getElementById('services-grid-container');
  if (servicesContainer && typeof serviceData !== 'undefined') {
    serviceData.forEach(function (svc, i) {
      var num = (i + 1).toString().padStart(2, '0');
      var card = document.createElement('div');
      card.className = 'service-card-new';
      card.innerHTML =
        '<span class="service-num">' + num + '</span>' +
        '<div class="service-icon-wrap"><i class="' + svc.icon + '"></i></div>' +
        '<h5>' + svc.title + '</h5>' +
        '<p>' + svc.description + '</p>';
      servicesContainer.appendChild(card);
    });
  }

  // ─── Portfolio — isotope + filter ─────────────────────────────────────────
  $(document).ready(function () {
    var $container = $('.portfolio-container');

    if (typeof portfolioItems !== 'undefined') {
      portfolioItems.forEach(function (item) {
        // Use direct CSS classes (no Bootstrap col-* — Isotope needs display:block parent)
        var cats = item.categories.map(function (c) {
          return c.replace(/[^a-zA-Z0-9-_]/g, '');
        }).join(' ');

        var html =
          '<div class="portfolio-item ' + cats + '">' +
            '<div class="portfolio-img">' +
              '<img src="' + item.image + '" alt="' + item.title + '" loading="lazy">' +
            '</div>' +
            '<div class="portfolio-text">' +
              '<h4>' + item.title + '</h4>' +
              '<p>' + item.description + '</p>' +
              '<a class="btn" href="' + item.link + '" target="_blank" rel="noopener">' +
                '<i class="fas fa-external-link-alt mr-1"></i> View Project' +
              '</a>' +
            '</div>' +
          '</div>';
        $container.append(html);
      });
    }

    // Initialize Isotope only after all images have loaded (prevents layout jitter)
    var $iso;
    function initIsotope() {
      $iso = $container.isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
        fitRows: { gutter: 16 }
      });
    }

    // Use imagesLoaded if available, otherwise fall back to window load
    if (typeof $.fn.imagesLoaded === 'function') {
      $container.imagesLoaded(initIsotope);
    } else {
      // Small delay ensures images are settled before measuring
      $(window).on('load', function () {
        setTimeout(initIsotope, 100);
      });
      // Fallback if window already loaded
      if (document.readyState === 'complete') {
        setTimeout(initIsotope, 200);
      }
    }

    $('#portfolio-flters li').on('click', function () {
      $('#portfolio-flters li').removeClass('active');
      $(this).addClass('active');
      if ($iso) $iso.isotope({ filter: $(this).data('filter') });
    });
  });

  // ─── Testimonial Dot Indicator Sync ─────────────────────────────────────
  $('#testimonialCarousel').on('slide.bs.carousel', function (e) {
    var idx = e.to;
    $('.testimonial-dots li').removeClass('active');
    $('.testimonial-dots li').eq(idx).addClass('active');
  });

  // ─── Back to Top click ────────────────────────────────────────────────────
  $('.back-to-top').on('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

})(jQuery);
