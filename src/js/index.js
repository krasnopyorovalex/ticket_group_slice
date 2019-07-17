import "./import/modules.js";

(function () {

    let popularMatchesCarousel = $(".popular_matches-carousel");
    if (popularMatchesCarousel.length) {
        popularMatchesCarousel.owlCarousel({
            margin:0,
            nav:true,
            dots:true,
            items: 3,
            responsive : {
                0 : {
                    items: 1
                },
                540 : {
                    items: 1
                },
                768 : {
                    items: 2
                },
                991 : {
                    items: 3
                }
            }
        });
    }

    let phone = jQuery("form input.field_phone");
    if (phone.length) {
        phone.mask('+0 (000) 000-00-00', {placeholder: "+_ (___) ___-__-__"});
    }

})($);
