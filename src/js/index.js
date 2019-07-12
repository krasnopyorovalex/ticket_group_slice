import "./import/modules.js";
import "owl.carousel/dist/owl.carousel.min.js";

(function () {

    let popularMatchesCarousel = $(".popular_matches-carousel");
    if (popularMatchesCarousel.length) {
        popularMatchesCarousel.owlCarousel({
            margin:0,
            nav:true,
            dots:true,
            items: 3
        });
    }

})($);
