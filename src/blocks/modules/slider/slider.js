(function () {

    let slider = $(".main_slider");
    if (slider.length) {
        slider.owlCarousel({
            margin:0,
            loop: true,
            nav:true,
            dots:false,
            items: 1,
            autoplay: true
        });
    }

})($);
