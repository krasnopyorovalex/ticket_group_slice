(function () {

    $("#sticky").sticky({zIndex: 20});

    let logoBoxSearch = $(".logo_box-search");
    if (logoBoxSearch.length) {
        logoBoxSearch.on("click", ".icon_search", function () {
            return $(this).closest("form").submit();
        });
    }

    let menu = $(".menu,.f_menu");
    if(menu.length) {
        menu.on("click", "li", function (e) {
            e.preventDefault();
            let _this = $(this),
                scrollTo = "#" + _this.attr("data-target");
            return $.scrollTo($(scrollTo), 750,  {offset: {top:-80} });
        });
    }

})($);
