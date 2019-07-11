import "./import/modules.js";
import "owl.carousel/dist/owl.carousel.min.js";

(function () {

    $("#sticky").sticky({zIndex: 20});

    let popularMatchesCarousel = $(".popular_matches-carousel");
    if (popularMatchesCarousel.length) {
        popularMatchesCarousel.owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            dots:true,
            items: 4
        });
    }

})($);
