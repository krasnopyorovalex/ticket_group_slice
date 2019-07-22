(function () {

    $("#sticky").sticky({zIndex: 20});

    let logoBoxSearch = $(".logo_box-search");
    if (logoBoxSearch.length) {
        logoBoxSearch.on("click", ".icon_search", function () {
            return $(this).closest("form").submit();
        });
    }

    let burgerMenu = $(".burger-menu"),
        closeBtn = $(".close-menu-btn");
    if (burgerMenu.length) {
        burgerMenu.on("click", function () {
            return $(this).closest(".menu").toggleClass("is_opened");
        });
    }
    if (closeBtn.length) {
        closeBtn.on("click", function () {
            return $(this).closest(".menu").toggleClass("is_opened");
        });
    }

    let menu = $(".menu,.f_menu");
    if (menu.length) {
        menu.on("click", "li", function (e) {
            e.preventDefault();
            let _this = $(this),
                scrollTo = "#" + _this.attr("data-target");

            if (menu.hasClass("is_opened")) {
                menu.removeClass("is_opened");
            }
            return $.scrollTo($(scrollTo), 750,  {offset: {top:-80} });
        });
    }

})($);
