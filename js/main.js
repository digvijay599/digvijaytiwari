(function ($) {
    "use strict"

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex')
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none')
        }
    })


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault()

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo')

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active')
                $(this).closest('a').addClass('active')
            }
        }
    })


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text()
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        })
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src")
        })
        console.log($videoSrc)

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0")
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc)
        })
    })


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow')
        } else {
            $('.scroll-to-bottom').fadeIn('slow')
        }
    })


    // Skills
    $(document).ready(function () {
        const skillsContainer = $('.skills-grid .row')
        skilles.forEach((skill, index) => {
            const skillHTML = `
                <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                    <div class="card text-center p-3 h-100" data-animate="fade-up" data-delay="${index * 50}">
                        <div class="mb-2"><i class="${skill.icon} fa-2x text-primary"></i></div>
                        <div class="font-weight-bold">${skill.name}</div>
                        <div class="text-muted">${skill.level}</div>
                    </div>
                </div>
            `
            skillsContainer.append(skillHTML)
        })
    })



    // Portfolio isotope and filter
    $(document).ready(function () {
        const portfolioContainer = $('.portfolio-container');
        portfolioItems.forEach((item, index) => {
            const categoriesClass = item.categories.map(cat => cat.replace(/[^a-zA-Z0-9-_]/g, '')).join(' ');
            const portfolioHTML = `
                    <div class="col-lg-4 col-md-6 portfolio-item ${categoriesClass} mb-4">
                    <div class="position-relative overflow-hidden rounded-lg shadow-sm portfolio-hover-effect">
                        <img class="img-fluid w-100" src="${item.image}" alt="${item.title}">
                        <div class="portfolio-text bg-dark bg-opacity-75 d-flex flex-column justify-content-center align-items-center p-4 text-center">
                            <h4 class="text-white font-weight-bold mb-2">${item.title}</h4>
                            <p class="text-white-50 mb-3">${item.description}</p>
                            <a class="btn btn-outline-light btn-sm" href="${item.link}" target="_blank">
                                <i class="fa fa-link"></i> View Project
                            </a>
                        </div>
                    </div>
                </div>
            `;
            portfolioContainer.append(portfolioHTML);
        });

        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });
        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('active');
            $(this).addClass('active');

            portfolioIsotope.isotope({ filter: $(this).data('filter') });
        });
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow')
        } else {
            $('.back-to-top').fadeOut('slow')
        }
    })
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo')
        return false
    })


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    })

})(jQuery);

