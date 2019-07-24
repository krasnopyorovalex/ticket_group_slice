(function () {

    $("#sticky").sticky({zIndex: 20});

    const logoBoxSearch = $(".logo_box-search"),
        matchScheduleContainer = $(".match_schedule > .container");
    if (logoBoxSearch.length) {
        logoBoxSearch.on("click", ".icon_search", function () {
            const form = $(this).closest("form");

            if (form.find("input[name=keyword]").val().length < 3) {
                return false;
            }

            return form.submit();
        });

        logoBoxSearch.on("submit", "form", function (e) {
            e.preventDefault();

            let _this = $(this),
                url = _this.attr('action'),
                data = _this.serialize();

            return jQuery.ajax({
                type: "POST",
                dataType: "html",
                url: url,
                data: data,
                success: function (response) {
                    matchScheduleContainer.html(response);
                    return _this.trigger("reset") && $.scrollTo($(".match_schedule"), 750,  {offset: {top:-80} });
                }
            });
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
