(function () {

    $("#sticky").sticky({zIndex: 20});

    let logoBoxSearch = $(".logo_box-search");
    if (logoBoxSearch.length) {
        logoBoxSearch.on("click", ".icon_search", function () {
            return $(this).closest("form").submit();
        });
    }

})($);
